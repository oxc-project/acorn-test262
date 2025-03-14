__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 612,
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
        "optional": false
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
      }
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
              "optional": false
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "foo",
              "optional": false
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
              "params": []
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
        "optional": false
      },
      "implements": [],
      "superClass": null
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
        "optional": false
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
            "optional": false
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
              "optional": false
            }
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
            "optional": false
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
              "optional": false
            },
            "operator": "-",
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
            "optional": false
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
            "operator": "-",
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
            "optional": false
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
                    "optional": false
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
                    "optional": false
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
            "operator": "-",
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
            "optional": false
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
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "operator": "-",
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
            "optional": false
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
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            },
            "operator": "-",
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
            "optional": false
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
                "optional": false
              },
              "optional": false
            },
            "operator": "-",
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
            "optional": false
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
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 525,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            },
            "operator": "-",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 559,
      "end": 565,
      "expression": {
        "type": "UnaryExpression",
        "start": 559,
        "end": 564,
        "argument": {
          "type": "Literal",
          "start": 560,
          "end": 564,
          "raw": "true",
          "value": true
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 566,
      "end": 575,
      "expression": {
        "type": "UnaryExpression",
        "start": 566,
        "end": 574,
        "argument": {
          "type": "Identifier",
          "start": 567,
          "end": 574,
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 576,
      "end": 583,
      "expression": {
        "type": "UnaryExpression",
        "start": 576,
        "end": 582,
        "argument": {
          "type": "CallExpression",
          "start": 577,
          "end": 582,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 577,
            "end": 580,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 584,
      "end": 597,
      "expression": {
        "type": "SequenceExpression",
        "start": 584,
        "end": 596,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 584,
            "end": 589,
            "argument": {
              "type": "Literal",
              "start": 585,
              "end": 589,
              "raw": "true",
              "value": true
            },
            "operator": "-",
            "prefix": true
          },
          {
            "type": "Literal",
            "start": 591,
            "end": 596,
            "raw": "false",
            "value": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 598,
      "end": 606,
      "expression": {
        "type": "UnaryExpression",
        "start": 598,
        "end": 605,
        "argument": {
          "type": "MemberExpression",
          "start": 599,
          "end": 605,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 599,
            "end": 603,
            "decorators": [],
            "name": "objA",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 604,
            "end": 605,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 607,
      "end": 612,
      "expression": {
        "type": "UnaryExpression",
        "start": 607,
        "end": 611,
        "argument": {
          "type": "MemberExpression",
          "start": 608,
          "end": 611,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 610,
            "end": 611,
            "decorators": [],
            "name": "n",
            "optional": false
          }
        },
        "operator": "-",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
