__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 670,
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
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 266,
            "name": "ResultIsNumber1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 269,
            "end": 277,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 270,
              "end": 277,
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
      "start": 304,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 323,
            "name": "ResultIsNumber2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 326,
            "end": 331,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 327,
              "end": 331,
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
      "start": 333,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 352,
            "name": "ResultIsNumber3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 355,
            "end": 377,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 356,
              "end": 377,
              "properties": [
                {
                  "type": "Property",
                  "start": 358,
                  "end": 365,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 361,
                    "end": 365,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 367,
                  "end": 375,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 370,
                    "end": 375,
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
      "start": 408,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 427,
            "name": "ResultIsNumber4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 430,
            "end": 437,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 431,
              "end": 437,
              "object": {
                "type": "Identifier",
                "start": 431,
                "end": 435,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
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
      "start": 439,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 458,
            "name": "ResultIsNumber5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 461,
            "end": 465,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 462,
              "end": 465,
              "object": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
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
      "start": 467,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 486,
            "name": "ResultIsNumber6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 489,
            "end": 495,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 490,
              "end": 495,
              "callee": {
                "type": "Identifier",
                "start": 490,
                "end": 493,
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
      "start": 497,
      "end": 528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 527,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 516,
            "name": "ResultIsNumber7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 519,
            "end": 527,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 520,
              "end": 527,
              "callee": {
                "type": "MemberExpression",
                "start": 520,
                "end": 525,
                "object": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 521,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 525,
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
      "start": 554,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 573,
            "name": "ResultIsNumber8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 576,
            "end": 585,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 577,
              "end": 585,
              "operator": "~",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 578,
                "end": 585,
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
      "start": 617,
      "end": 623,
      "expression": {
        "type": "UnaryExpression",
        "start": 617,
        "end": 622,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 618,
          "end": 622,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 624,
      "end": 633,
      "expression": {
        "type": "UnaryExpression",
        "start": 624,
        "end": 632,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 625,
          "end": 632,
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
      "start": 634,
      "end": 641,
      "expression": {
        "type": "UnaryExpression",
        "start": 634,
        "end": 640,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 635,
          "end": 640,
          "callee": {
            "type": "Identifier",
            "start": 635,
            "end": 638,
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
      "start": 642,
      "end": 655,
      "expression": {
        "type": "SequenceExpression",
        "start": 642,
        "end": 654,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 642,
            "end": 647,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 643,
              "end": 647,
              "value": true,
              "raw": "true"
            }
          },
          {
            "type": "Literal",
            "start": 649,
            "end": 654,
            "value": false,
            "raw": "false"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 656,
      "end": 664,
      "expression": {
        "type": "UnaryExpression",
        "start": 656,
        "end": 663,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 657,
          "end": 663,
          "object": {
            "type": "Identifier",
            "start": 657,
            "end": 661,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 662,
            "end": 663,
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
      "start": 665,
      "end": 670,
      "expression": {
        "type": "UnaryExpression",
        "start": 665,
        "end": 669,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 666,
          "end": 669,
          "object": {
            "type": "Identifier",
            "start": 666,
            "end": 667,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 668,
            "end": 669,
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
