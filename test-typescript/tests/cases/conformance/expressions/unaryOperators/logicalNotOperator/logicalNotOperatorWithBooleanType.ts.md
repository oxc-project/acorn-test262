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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 93,
      "async": false,
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
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 164,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 164,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 127,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 162,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 162,
              "async": false,
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
                      "raw": "false",
                      "value": false,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
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
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 165,
      "end": 204,
      "body": {
        "type": "TSModuleBlock",
        "start": 174,
        "end": 204,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 180,
            "end": 202,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 187,
              "end": 202,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 191,
                  "end": 201,
                  "definite": false,
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
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 271,
              "end": 278,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Literal",
              "start": 329,
              "end": 333,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "ObjectExpression",
              "start": 359,
              "end": 380,
              "properties": [
                {
                  "type": "Property",
                  "start": 361,
                  "end": 368,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 364,
                    "end": 368,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 370,
                  "end": 378,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 371,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 373,
                    "end": 378,
                    "raw": "false",
                    "value": false,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 435,
              "end": 441,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 435,
                "end": 439,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 467,
              "end": 470,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 496,
              "end": 501,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 496,
                "end": 499,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 527,
              "end": 534,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 527,
                "end": 532,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 528,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 532,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "UnaryExpression",
              "start": 584,
              "end": 592,
              "argument": {
                "type": "Identifier",
                "start": 585,
                "end": 592,
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 624,
      "end": 630,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 624,
        "end": 629,
        "argument": {
          "type": "Literal",
          "start": 625,
          "end": 629,
          "raw": "true",
          "value": true,
          "regex": null,
          "bigint": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 631,
      "end": 640,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 631,
        "end": 639,
        "argument": {
          "type": "Identifier",
          "start": 632,
          "end": 639,
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 641,
      "end": 648,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 641,
        "end": 647,
        "argument": {
          "type": "CallExpression",
          "start": 642,
          "end": 647,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 642,
            "end": 645,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 649,
      "end": 662,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 649,
        "end": 661,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 649,
            "end": 654,
            "argument": {
              "type": "Literal",
              "start": 650,
              "end": 654,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            },
            "operator": "!",
            "prefix": true
          },
          {
            "type": "Literal",
            "start": 656,
            "end": 661,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 663,
      "end": 671,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 663,
        "end": 670,
        "argument": {
          "type": "MemberExpression",
          "start": 664,
          "end": 670,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 664,
            "end": 668,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 669,
            "end": 670,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 672,
      "end": 677,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 672,
        "end": 676,
        "argument": {
          "type": "MemberExpression",
          "start": 673,
          "end": 676,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 673,
            "end": 674,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 675,
            "end": 676,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
