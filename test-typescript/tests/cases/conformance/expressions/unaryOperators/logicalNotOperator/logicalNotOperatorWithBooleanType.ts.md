__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 677,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 50,
            "name": "BOOLEAN",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 50,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 43,
                "end": 50
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
      "start": 53,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
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
        "start": 77,
        "end": 93,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 79,
            "end": 91,
            "argument": {
              "type": "Literal",
              "start": 86,
              "end": 90,
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
        "start": 67,
        "end": 76,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 69,
          "end": 76
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 164,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
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
              "start": 117,
              "end": 126,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 119,
                "end": 126
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 162,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 162,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 162,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 147,
                    "end": 160,
                    "argument": {
                      "type": "Literal",
                      "start": 154,
                      "end": 159,
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
      "start": 165,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 174,
        "end": 204,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 180,
            "end": 202,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 187,
              "end": 202,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 191,
                  "end": 201,
                  "id": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 201,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 192,
                      "end": 201,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 194,
                        "end": 201
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
      "start": 206,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 214,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 217,
            "end": 224,
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
      "start": 247,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 267,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 270,
            "end": 278,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 271,
              "end": 278,
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
      "start": 305,
      "end": 334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 333,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 325,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 328,
            "end": 333,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 329,
              "end": 333,
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
      "start": 335,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 355,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 358,
            "end": 380,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 359,
              "end": 380,
              "properties": [
                {
                  "type": "Property",
                  "start": 361,
                  "end": 368,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 364,
                    "end": 368,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 370,
                  "end": 378,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 371,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 373,
                    "end": 378,
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
      "start": 411,
      "end": 442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 441,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 431,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 434,
            "end": 441,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 435,
              "end": 441,
              "object": {
                "type": "Identifier",
                "start": 435,
                "end": 439,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
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
      "start": 443,
      "end": 471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 470,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 463,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 466,
            "end": 470,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 467,
              "end": 470,
              "object": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
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
      "start": 472,
      "end": 502,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 501,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 492,
            "name": "ResultIsBoolean6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 495,
            "end": 501,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 496,
              "end": 501,
              "callee": {
                "type": "Identifier",
                "start": 496,
                "end": 499,
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
      "start": 503,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 534,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 523,
            "name": "ResultIsBoolean7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 526,
            "end": 534,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 527,
              "end": 534,
              "callee": {
                "type": "MemberExpression",
                "start": 527,
                "end": 532,
                "object": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 528,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 532,
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
      "start": 561,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 592,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 580,
            "name": "ResultIsBoolean",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 583,
            "end": 592,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 584,
              "end": 592,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 585,
                "end": 592,
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
      "start": 624,
      "end": 630,
      "expression": {
        "type": "UnaryExpression",
        "start": 624,
        "end": 629,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 625,
          "end": 629,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 631,
      "end": 640,
      "expression": {
        "type": "UnaryExpression",
        "start": 631,
        "end": 639,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 632,
          "end": 639,
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
      "start": 641,
      "end": 648,
      "expression": {
        "type": "UnaryExpression",
        "start": 641,
        "end": 647,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 642,
          "end": 647,
          "callee": {
            "type": "Identifier",
            "start": 642,
            "end": 645,
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
      "start": 649,
      "end": 662,
      "expression": {
        "type": "SequenceExpression",
        "start": 649,
        "end": 661,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 649,
            "end": 654,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 650,
              "end": 654,
              "value": true,
              "raw": "true"
            }
          },
          {
            "type": "Literal",
            "start": 656,
            "end": 661,
            "value": false,
            "raw": "false"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 663,
      "end": 671,
      "expression": {
        "type": "UnaryExpression",
        "start": 663,
        "end": 670,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 664,
          "end": 670,
          "object": {
            "type": "Identifier",
            "start": 664,
            "end": 668,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 669,
            "end": 670,
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
      "start": 672,
      "end": 677,
      "expression": {
        "type": "UnaryExpression",
        "start": 672,
        "end": 676,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 673,
          "end": 676,
          "object": {
            "type": "Identifier",
            "start": 673,
            "end": 674,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 675,
            "end": 676,
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
