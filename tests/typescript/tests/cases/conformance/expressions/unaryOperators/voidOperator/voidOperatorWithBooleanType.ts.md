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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 54,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 54,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 47,
                "end": 54
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
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 71,
        "end": 80,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 73,
          "end": 80
        }
      },
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 168,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 168,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 131,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 166,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "type": "TSModuleDeclaration",
      "start": 169,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 195,
                  "end": 205,
                  "id": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 205,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 205,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 198,
                        "end": 205
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 228,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 218,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 221,
            "end": 228,
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 283,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 267,
            "decorators": [],
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 270,
            "end": 282,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 275,
              "end": 282,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 338,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 325,
            "decorators": [],
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 328,
            "end": 337,
            "operator": "void",
            "argument": {
              "type": "Literal",
              "start": 333,
              "end": 337,
              "value": true,
              "raw": "true"
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 385,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 355,
            "decorators": [],
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 358,
            "end": 384,
            "operator": "void",
            "argument": {
              "type": "ObjectExpression",
              "start": 363,
              "end": 384,
              "properties": [
                {
                  "type": "Property",
                  "start": 365,
                  "end": 372,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 366,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 368,
                    "end": 372,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 374,
                  "end": 382,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 377,
                    "end": 382,
                    "value": false,
                    "raw": "false"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 446,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 445,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 431,
            "decorators": [],
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 434,
            "end": 445,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 439,
              "end": 445,
              "object": {
                "type": "Identifier",
                "start": 439,
                "end": 443,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 475,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 463,
            "decorators": [],
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 466,
            "end": 474,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 471,
              "end": 474,
              "object": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 506,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 492,
            "decorators": [],
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 495,
            "end": 505,
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "start": 500,
              "end": 505,
              "callee": {
                "type": "Identifier",
                "start": 500,
                "end": 503,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 507,
      "end": 539,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 538,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 523,
            "decorators": [],
            "name": "ResultIsAny7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 526,
            "end": 538,
            "operator": "void",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 536,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 605,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 584,
            "decorators": [],
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 587,
            "end": 604,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 592,
              "end": 604,
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "start": 597,
                "end": 604,
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
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
        "argument": {
          "type": "Literal",
          "start": 641,
          "end": 645,
          "value": true,
          "raw": "true"
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 652,
          "end": 659,
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "CallExpression",
          "start": 666,
          "end": 671,
          "callee": {
            "type": "Identifier",
            "start": 666,
            "end": 669,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "prefix": true
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
            "argument": {
              "type": "Literal",
              "start": 678,
              "end": 682,
              "value": true,
              "raw": "true"
            },
            "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 696,
          "end": 702,
          "object": {
            "type": "Identifier",
            "start": 696,
            "end": 700,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 701,
            "end": 702,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 709,
          "end": 712,
          "object": {
            "type": "Identifier",
            "start": 709,
            "end": 710,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 711,
            "end": 712,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
