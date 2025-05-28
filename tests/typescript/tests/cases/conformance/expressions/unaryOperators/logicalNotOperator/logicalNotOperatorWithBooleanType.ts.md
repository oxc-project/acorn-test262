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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 50,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 50,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 43,
                "end": 50
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
      "start": 53,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
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
        "start": 67,
        "end": 76,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 69,
          "end": 76
        }
      },
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 164,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
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
        "start": 103,
        "end": 164,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 127,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "start": 132,
            "end": 162,
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
              "type": "FunctionExpression",
              "start": 142,
              "end": 162,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 165,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 191,
                  "end": 201,
                  "id": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 201,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 192,
                      "end": 201,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 194,
                        "end": 201
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
      "start": 206,
      "end": 225,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 214,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 217,
            "end": 224,
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
      "start": 247,
      "end": 279,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 267,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 270,
            "end": 278,
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "start": 271,
              "end": 278,
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
      "start": 305,
      "end": 334,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 333,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 325,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 328,
            "end": 333,
            "operator": "!",
            "argument": {
              "type": "Literal",
              "start": 329,
              "end": 333,
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
      "start": 335,
      "end": 381,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 355,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 358,
            "end": 380,
            "operator": "!",
            "argument": {
              "type": "ObjectExpression",
              "start": 359,
              "end": 380,
              "properties": [
                {
                  "type": "Property",
                  "start": 361,
                  "end": 368,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 364,
                    "end": 368,
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
                  "start": 370,
                  "end": 378,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 371,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 373,
                    "end": 378,
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
      "start": 411,
      "end": 442,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 441,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 431,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 434,
            "end": 441,
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 435,
              "end": 441,
              "object": {
                "type": "Identifier",
                "start": 435,
                "end": 439,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
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
      "start": 443,
      "end": 471,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 470,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 463,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 466,
            "end": 470,
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 467,
              "end": 470,
              "object": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
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
      "start": 472,
      "end": 502,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 501,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 492,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 495,
            "end": 501,
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "start": 496,
              "end": 501,
              "callee": {
                "type": "Identifier",
                "start": 496,
                "end": 499,
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
      "start": 503,
      "end": 535,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 534,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 523,
            "decorators": [],
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 526,
            "end": 534,
            "operator": "!",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 532,
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
      "start": 561,
      "end": 593,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 592,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 580,
            "decorators": [],
            "name": "ResultIsBoolean",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 583,
            "end": 592,
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "start": 584,
              "end": 592,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 585,
                "end": 592,
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
      "start": 624,
      "end": 630,
      "expression": {
        "type": "UnaryExpression",
        "start": 624,
        "end": 629,
        "operator": "!",
        "argument": {
          "type": "Literal",
          "start": 625,
          "end": 629,
          "value": true,
          "raw": "true"
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 632,
          "end": 639,
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
      "start": 641,
      "end": 648,
      "expression": {
        "type": "UnaryExpression",
        "start": 641,
        "end": 647,
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "start": 642,
          "end": 647,
          "callee": {
            "type": "Identifier",
            "start": 642,
            "end": 645,
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
            "argument": {
              "type": "Literal",
              "start": 650,
              "end": 654,
              "value": true,
              "raw": "true"
            },
            "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 664,
          "end": 670,
          "object": {
            "type": "Identifier",
            "start": 664,
            "end": 668,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 669,
            "end": 670,
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
      "start": 672,
      "end": 677,
      "expression": {
        "type": "UnaryExpression",
        "start": 672,
        "end": 676,
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "start": 673,
          "end": 676,
          "object": {
            "type": "Identifier",
            "start": 673,
            "end": 674,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 675,
            "end": 676,
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
