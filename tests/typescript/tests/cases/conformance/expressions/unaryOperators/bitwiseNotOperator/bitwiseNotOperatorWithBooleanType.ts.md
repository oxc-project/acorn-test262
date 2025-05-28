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
      "end": 278,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 266,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 269,
            "end": 277,
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "start": 270,
              "end": 277,
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
      "start": 304,
      "end": 332,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 323,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 326,
            "end": 331,
            "operator": "~",
            "argument": {
              "type": "Literal",
              "start": 327,
              "end": 331,
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
      "start": 333,
      "end": 378,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 352,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 355,
            "end": 377,
            "operator": "~",
            "argument": {
              "type": "ObjectExpression",
              "start": 356,
              "end": 377,
              "properties": [
                {
                  "type": "Property",
                  "start": 358,
                  "end": 365,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 361,
                    "end": 365,
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
                  "start": 367,
                  "end": 375,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 370,
                    "end": 375,
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
      "start": 408,
      "end": 438,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 427,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 430,
            "end": 437,
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "start": 431,
              "end": 437,
              "object": {
                "type": "Identifier",
                "start": 431,
                "end": 435,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
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
      "start": 439,
      "end": 466,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 458,
            "decorators": [],
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 461,
            "end": 465,
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "start": 462,
              "end": 465,
              "object": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
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
      "start": 467,
      "end": 496,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 486,
            "decorators": [],
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 489,
            "end": 495,
            "operator": "~",
            "argument": {
              "type": "CallExpression",
              "start": 490,
              "end": 495,
              "callee": {
                "type": "Identifier",
                "start": 490,
                "end": 493,
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
      "start": 497,
      "end": 528,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 527,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 516,
            "decorators": [],
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 519,
            "end": 527,
            "operator": "~",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 525,
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
      "start": 554,
      "end": 586,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 573,
            "decorators": [],
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 576,
            "end": 585,
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "start": 577,
              "end": 585,
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "start": 578,
                "end": 585,
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
      "start": 617,
      "end": 623,
      "expression": {
        "type": "UnaryExpression",
        "start": 617,
        "end": 622,
        "operator": "~",
        "argument": {
          "type": "Literal",
          "start": 618,
          "end": 622,
          "value": true,
          "raw": "true"
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 625,
          "end": 632,
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
      "start": 634,
      "end": 641,
      "expression": {
        "type": "UnaryExpression",
        "start": 634,
        "end": 640,
        "operator": "~",
        "argument": {
          "type": "CallExpression",
          "start": 635,
          "end": 640,
          "callee": {
            "type": "Identifier",
            "start": 635,
            "end": 638,
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
            "argument": {
              "type": "Literal",
              "start": 643,
              "end": 647,
              "value": true,
              "raw": "true"
            },
            "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 657,
          "end": 663,
          "object": {
            "type": "Identifier",
            "start": 657,
            "end": 661,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 662,
            "end": 663,
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
      "start": 665,
      "end": 670,
      "expression": {
        "type": "UnaryExpression",
        "start": 665,
        "end": 669,
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "start": 666,
          "end": 669,
          "object": {
            "type": "Identifier",
            "start": 666,
            "end": 667,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 668,
            "end": 669,
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
