__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 793,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 23,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 19,
              "decorators": [],
              "name": "inModule",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 22,
              "end": 23,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 42,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 42,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 24,
          "end": 40,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 24,
            "end": 32,
            "decorators": [],
            "name": "inmodule",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 201,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 201,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 84,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 84,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "decorators": [],
                  "name": "locals",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 76,
                  "end": 84,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 76,
                    "end": 77,
                    "raw": "2",
                    "value": 2
                  },
                  "right": {
                    "type": "Literal",
                    "start": 80,
                    "end": 84,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 105,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 89,
              "end": 105,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 89,
                "end": 103,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 95,
                  "decorators": [],
                  "name": "locale",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 103,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 156,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 134,
              "end": 156,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 134,
                "end": 154,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 140,
                  "decorators": [],
                  "name": "localf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 154,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 199,
            "directive": null,
            "expression": {
              "type": "Literal",
              "start": 185,
              "end": 199,
              "raw": "\"this is fine\"",
              "value": "this is fine"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 202,
      "end": 322,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 215,
        "end": 322,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 232,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
              "decorators": [],
              "name": "non",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 227,
              "end": 232,
              "raw": "'oui'",
              "value": "oui"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 237,
            "end": 320,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 244,
              "decorators": [],
              "name": "methode",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 320,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 247,
                "end": 320,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 298,
                    "end": 314,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 305,
                      "end": 314,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 305,
                        "end": 309
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 314,
                        "decorators": [],
                        "name": "none",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 208,
        "end": 214,
        "decorators": [],
        "name": "Classe",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 323,
      "end": 445,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 352,
        "end": 445,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 443,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 365,
              "decorators": [],
              "name": "methode",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 365,
              "end": 443,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 368,
                "end": 443,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 420,
                    "end": 437,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 427,
                      "end": 437,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 427,
                        "end": 432
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 433,
                        "end": 437,
                        "decorators": [],
                        "name": "none",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 329,
        "end": 336,
        "decorators": [],
        "name": "Derivee",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 345,
        "end": 351,
        "decorators": [],
        "name": "Classe",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 479,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 458,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 461,
            "end": 479,
            "properties": [
              {
                "type": "Property",
                "start": 467,
                "end": 477,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 474,
                  "decorators": [],
                  "name": "spaaace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 476,
                  "end": 477,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 495,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 480,
        "end": 495,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 480,
          "end": 486,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 487,
          "end": 495,
          "decorators": [],
          "name": "spaaaace",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 531,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 513,
        "end": 531,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 513,
          "end": 526,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 513,
            "end": 519,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 520,
            "end": 526,
            "decorators": [],
            "name": "spaace",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 529,
          "end": 531,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 550,
      "end": 567,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 550,
        "end": 567,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 550,
          "end": 562,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 550,
            "end": 556,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 557,
            "end": 562,
            "decorators": [],
            "name": "fresh",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 565,
          "end": 567,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 586,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 574,
        "end": 586,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 574,
          "end": 579,
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 580,
          "end": 586,
          "decorators": [],
          "name": "puuuce",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 635,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 612,
        "end": 635,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 612,
          "end": 633,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 612,
            "end": 622,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 616,
              "end": 620,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 623,
            "end": 633,
            "decorators": [],
            "name": "getGMTDate",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 709,
      "end": 763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 715,
          "end": 763,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 715,
            "end": 719,
            "decorators": [],
            "name": "atoc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 722,
            "end": 763,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 734,
                "end": 757,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 740,
                  "end": 757,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 752,
                      "end": 756,
                      "raw": "'ok'",
                      "value": "ok"
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 740,
                    "end": 751,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 747,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 751,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 759,
                "end": 762,
                "raw": "500",
                "value": 500
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 722,
              "end": 733,
              "decorators": [],
              "name": "setIntegral",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 764,
      "end": 775,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 764,
        "end": 775,
        "decorators": [],
        "name": "AudioBuffin",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 783,
      "end": 788,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 783,
        "end": 788,
        "decorators": [],
        "name": "Jimmy",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 789,
      "end": 792,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 789,
        "end": 792,
        "decorators": [],
        "name": "Jon",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Jimmy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 13,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 22,
            "decorators": [],
            "name": "John",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 25,
            "end": 26,
            "raw": "2",
            "value": 2
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Jon",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 74,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 77,
            "end": 93,
            "properties": [
              {
                "type": "Property",
                "start": 83,
                "end": 91,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 88,
                  "decorators": [],
                  "name": "puuce",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 90,
                  "end": 91,
                  "raw": "4",
                  "value": 4
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
