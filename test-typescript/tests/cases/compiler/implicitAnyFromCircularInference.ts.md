__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 619,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 33,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 25,
                "end": 33,
                "exprName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 64,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 79,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 71,
                "end": 79,
                "exprName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 81,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 96,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 88,
                "end": 96,
                "exprName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 117,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 139,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 139,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 129,
                  "end": 139,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 130,
                      "end": 138,
                      "exprName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 129,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 142,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 155,
        "end": 168,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 157,
            "end": 166,
            "argument": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
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
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 216,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 216,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 203,
            "end": 214,
            "argument": {
              "type": "CallExpression",
              "start": 210,
              "end": 213,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 242,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 245,
            "end": 277,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 257,
              "end": 277,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 263,
                  "end": 275,
                  "argument": {
                    "type": "CallExpression",
                    "start": 270,
                    "end": 274,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 272,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
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
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 307,
            "end": 317,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 313,
              "end": 317,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 313,
                "end": 315,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 338,
      "end": 430,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 351,
        "end": 430,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 357,
            "end": 370,
            "argument": {
              "type": "CallExpression",
              "start": 364,
              "end": 369,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 364,
                "end": 367,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 375,
            "end": 428,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 390,
              "end": 428,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 400,
                  "end": 422,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 407,
                    "end": 421,
                    "operator": "||",
                    "left": {
                      "type": "CallExpression",
                      "start": 407,
                      "end": 410,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 408,
                        "decorators": [],
                        "name": "h",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 414,
                      "end": 421,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 387,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 348,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 432,
      "end": 462,
      "body": {
        "type": "TSInterfaceBody",
        "start": 444,
        "end": 462,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 450,
            "end": 460,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 459,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 453,
                "end": 459
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 443,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 464,
      "end": 508,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 491,
        "end": 508,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 493,
            "end": 506,
            "argument": {
              "type": "Literal",
              "start": 500,
              "end": 505,
              "raw": "\"abc\"",
              "value": "abc"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 476,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 477,
          "end": 481,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 478,
            "end": 481,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 480,
              "end": 481,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 482,
        "end": 490,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 484,
          "end": 490
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 510,
      "end": 540,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 518,
        "end": 540,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 524,
            "end": 538,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 525,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 528,
              "end": 537,
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 532,
                  "end": 536
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 528,
                "end": 531,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 517,
        "decorators": [],
        "name": "C",
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
      "start": 542,
      "end": 618,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 550,
        "end": 618,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 578,
            "end": 616,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 583,
              "end": 616,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 586,
                "end": 616,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 596,
                    "end": 610,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 603,
                      "end": 609,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 603,
                        "end": 607
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 608,
                        "end": 609,
                        "decorators": [],
                        "name": "x",
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
        "start": 548,
        "end": 549,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
