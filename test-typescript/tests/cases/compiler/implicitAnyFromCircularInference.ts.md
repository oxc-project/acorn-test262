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
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 33,
            "name": "a",
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 64,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 79,
            "name": "b",
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 81,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 96,
            "name": "c",
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
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 117,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 139,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 129,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
      "start": 142,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
        "name": "f",
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
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "name": "g",
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
              "callee": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 242,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 245,
            "end": 277,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 272,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 307,
            "end": 317,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 313,
              "end": 317,
              "callee": {
                "type": "Identifier",
                "start": 313,
                "end": 315,
                "name": "f2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 338,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 348,
        "name": "h",
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
              "callee": {
                "type": "Identifier",
                "start": 364,
                "end": 367,
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
          {
            "type": "FunctionDeclaration",
            "start": 375,
            "end": 428,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 387,
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
                    "left": {
                      "type": "CallExpression",
                      "start": 407,
                      "end": 410,
                      "callee": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 408,
                        "name": "h",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "Literal",
                      "start": 414,
                      "end": 421,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 432,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 443,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 444,
        "end": 462,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 450,
            "end": 460,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 459,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 453,
                "end": 459
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 464,
      "end": 508,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 476,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 477,
          "end": 481,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 478,
            "end": 481,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 480,
              "end": 481,
              "typeName": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "value": "abc",
              "raw": "\"abc\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 482,
        "end": 490,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 484,
          "end": 490
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 510,
      "end": 540,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 517,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 518,
        "end": 540,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 524,
            "end": 538,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 525,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 528,
              "end": 537,
              "callee": {
                "type": "Identifier",
                "start": 528,
                "end": 531,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 532,
                  "end": 536
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 542,
      "end": 618,
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 549,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 550,
        "end": 618,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 578,
            "end": 616,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 583,
              "end": 616,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 603,
                        "end": 607
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 608,
                        "end": 609,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
