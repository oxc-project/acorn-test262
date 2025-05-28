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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 23,
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
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 42,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 42,
        "callee": {
          "type": "MemberExpression",
          "start": 24,
          "end": 40,
          "object": {
            "type": "Identifier",
            "start": 24,
            "end": 32,
            "decorators": [],
            "name": "inmodule",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "toFixed",
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
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 201,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 84,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 84,
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
                  "left": {
                    "type": "Literal",
                    "start": 76,
                    "end": 77,
                    "value": 2,
                    "raw": "2"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 80,
                    "end": 84,
                    "value": true,
                    "raw": "true"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 105,
            "expression": {
              "type": "CallExpression",
              "start": 89,
              "end": 105,
              "callee": {
                "type": "MemberExpression",
                "start": 89,
                "end": 103,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 95,
                  "decorators": [],
                  "name": "locale",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 103,
                  "decorators": [],
                  "name": "toFixed",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 156,
            "expression": {
              "type": "CallExpression",
              "start": 134,
              "end": 156,
              "callee": {
                "type": "MemberExpression",
                "start": 134,
                "end": 154,
                "object": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 140,
                  "decorators": [],
                  "name": "localf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 154,
                  "decorators": [],
                  "name": "toExponential",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 199,
            "expression": {
              "type": "Literal",
              "start": 185,
              "end": 199,
              "value": "this is fine",
              "raw": "\"this is fine\""
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 202,
      "end": 322,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 215,
        "end": 322,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 232,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
              "decorators": [],
              "name": "non",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 227,
              "end": 232,
              "value": "oui",
              "raw": "'oui'"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 237,
            "end": 320,
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
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 320,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 305,
                        "end": 309
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 314,
                        "decorators": [],
                        "name": "none",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
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
      "type": "ClassDeclaration",
      "start": 323,
      "end": 445,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 352,
        "end": 445,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 443,
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
            "value": {
              "type": "FunctionExpression",
              "start": 365,
              "end": 443,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "Super",
                        "start": 427,
                        "end": 432
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 433,
                        "end": 437,
                        "decorators": [],
                        "name": "none",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
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
      "type": "VariableDeclaration",
      "start": 448,
      "end": 479,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 479,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 474,
                  "decorators": [],
                  "name": "spaaace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 476,
                  "end": 477,
                  "value": 3,
                  "raw": "3"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 495,
      "expression": {
        "type": "MemberExpression",
        "start": 480,
        "end": 495,
        "object": {
          "type": "Identifier",
          "start": 480,
          "end": 486,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 487,
          "end": 495,
          "decorators": [],
          "name": "spaaaace",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 531,
      "expression": {
        "type": "AssignmentExpression",
        "start": 513,
        "end": 531,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 513,
          "end": 526,
          "object": {
            "type": "Identifier",
            "start": 513,
            "end": 519,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 520,
            "end": 526,
            "decorators": [],
            "name": "spaace",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 529,
          "end": 531,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 550,
      "end": 567,
      "expression": {
        "type": "AssignmentExpression",
        "start": 550,
        "end": 567,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 550,
          "end": 562,
          "object": {
            "type": "Identifier",
            "start": 550,
            "end": 556,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 557,
            "end": 562,
            "decorators": [],
            "name": "fresh",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 565,
          "end": 567,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 586,
      "expression": {
        "type": "MemberExpression",
        "start": 574,
        "end": 586,
        "object": {
          "type": "Identifier",
          "start": 574,
          "end": 579,
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 580,
          "end": 586,
          "decorators": [],
          "name": "puuuce",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 635,
      "expression": {
        "type": "CallExpression",
        "start": 612,
        "end": 635,
        "callee": {
          "type": "MemberExpression",
          "start": 612,
          "end": 633,
          "object": {
            "type": "NewExpression",
            "start": 612,
            "end": 622,
            "callee": {
              "type": "Identifier",
              "start": 616,
              "end": 620,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 623,
            "end": 633,
            "decorators": [],
            "name": "getGMTDate",
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
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 709,
      "end": 763,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 715,
          "end": 763,
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
            "callee": {
              "type": "Identifier",
              "start": 722,
              "end": 733,
              "decorators": [],
              "name": "setIntegral",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 734,
                "end": 757,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 740,
                  "end": 757,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 740,
                    "end": 751,
                    "object": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 747,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 751,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 752,
                      "end": 756,
                      "value": "ok",
                      "raw": "'ok'"
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "Literal",
                "start": 759,
                "end": 762,
                "value": 500,
                "raw": "500"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 764,
      "end": 775,
      "expression": {
        "type": "Identifier",
        "start": 764,
        "end": 775,
        "decorators": [],
        "name": "AudioBuffin",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 783,
      "end": 788,
      "expression": {
        "type": "Identifier",
        "start": 783,
        "end": 788,
        "decorators": [],
        "name": "Jimmy",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 789,
      "end": 792,
      "expression": {
        "type": "Identifier",
        "start": 789,
        "end": 792,
        "decorators": [],
        "name": "Jon",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 26,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 26,
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
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 30,
      "expression": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Jon",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 93,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 93,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 88,
                  "decorators": [],
                  "name": "puuce",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 90,
                  "end": 91,
                  "value": 4,
                  "raw": "4"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
