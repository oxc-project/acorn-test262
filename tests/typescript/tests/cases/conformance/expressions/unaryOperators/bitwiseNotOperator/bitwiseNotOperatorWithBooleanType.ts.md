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
              "value": true
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
                      "value": false
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
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 277,
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 270,
              "end": 277,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Literal",
              "start": 327,
              "end": 331,
              "raw": "true",
              "value": true
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "ObjectExpression",
              "start": 356,
              "end": 377,
              "properties": [
                {
                  "type": "Property",
                  "start": 358,
                  "end": 365,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
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
                    "start": 361,
                    "end": 365,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "Property",
                  "start": 367,
                  "end": 375,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
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
                    "start": 370,
                    "end": 375,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 431,
              "end": 437,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 431,
                "end": 435,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 462,
              "end": 465,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 490,
              "end": 495,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 490,
                "end": 493,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 520,
              "end": 527,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 520,
                "end": 525,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 521,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 525,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "UnaryExpression",
              "start": 577,
              "end": 585,
              "argument": {
                "type": "Identifier",
                "start": 578,
                "end": 585,
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "~",
              "prefix": true
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 617,
      "end": 623,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 617,
        "end": 622,
        "argument": {
          "type": "Literal",
          "start": 618,
          "end": 622,
          "raw": "true",
          "value": true
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 624,
      "end": 633,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 624,
        "end": 632,
        "argument": {
          "type": "Identifier",
          "start": 625,
          "end": 632,
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 634,
      "end": 641,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 634,
        "end": 640,
        "argument": {
          "type": "CallExpression",
          "start": 635,
          "end": 640,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 635,
            "end": 638,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 642,
      "end": 655,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 642,
        "end": 654,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 642,
            "end": 647,
            "argument": {
              "type": "Literal",
              "start": 643,
              "end": 647,
              "raw": "true",
              "value": true
            },
            "operator": "~",
            "prefix": true
          },
          {
            "type": "Literal",
            "start": 649,
            "end": 654,
            "raw": "false",
            "value": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 656,
      "end": 664,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 656,
        "end": 663,
        "argument": {
          "type": "MemberExpression",
          "start": 657,
          "end": 663,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 657,
            "end": 661,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 662,
            "end": 663,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 665,
      "end": 670,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 665,
        "end": 669,
        "argument": {
          "type": "MemberExpression",
          "start": 666,
          "end": 669,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 666,
            "end": 667,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 668,
            "end": 669,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "~",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
