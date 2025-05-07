__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 667,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 10,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 70,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 64,
                    "argument": {
                      "type": "Literal",
                      "start": 56,
                      "end": 63,
                      "raw": "\"BaseX\"",
                      "value": "BaseX",
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
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 122,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 122,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 122,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 101,
                    "end": 116,
                    "argument": {
                      "type": "Literal",
                      "start": 108,
                      "end": 115,
                      "raw": "\"BaseY\"",
                      "value": "BaseY",
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
        "start": 16,
        "end": 21,
        "decorators": [],
        "name": "Base5",
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
      "start": 126,
      "end": 200,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 200,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 157,
            "end": 198,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 198,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 198,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 178,
                    "end": 192,
                    "argument": {
                      "type": "Literal",
                      "start": 185,
                      "end": 191,
                      "raw": "\"SubX\"",
                      "value": "SubX",
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
        "start": 132,
        "end": 136,
        "decorators": [],
        "name": "Sub5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 145,
        "end": 150,
        "decorators": [],
        "name": "Base5",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 202,
      "end": 330,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 229,
        "end": 330,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 279,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 243,
              "end": 279,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 279,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 256,
                    "end": 273,
                    "argument": {
                      "type": "CallExpression",
                      "start": 263,
                      "end": 272,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 263,
                        "end": 270,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 263,
                          "end": 268
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 270,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
          },
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 328,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 328,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 295,
                "end": 328,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 305,
                    "end": 322,
                    "argument": {
                      "type": "CallExpression",
                      "start": 312,
                      "end": 321,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 312,
                        "end": 319,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 312,
                          "end": 317
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 318,
                          "end": 319,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 215,
        "decorators": [],
        "name": "SubSub5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 228,
        "decorators": [],
        "name": "Sub5",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 342,
      "end": 404,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 354,
        "end": 404,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 360,
            "end": 402,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 368,
              "end": 402,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 371,
                "end": 402,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 381,
                    "end": 396,
                    "argument": {
                      "type": "Literal",
                      "start": 388,
                      "end": 395,
                      "raw": "\"BaseX\"",
                      "value": "BaseX",
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
        "start": 348,
        "end": 353,
        "decorators": [],
        "name": "Base6",
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
      "start": 406,
      "end": 480,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 431,
        "end": 480,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 437,
            "end": 478,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 445,
              "end": 478,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 448,
                "end": 478,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 458,
                    "end": 472,
                    "argument": {
                      "type": "Literal",
                      "start": 465,
                      "end": 471,
                      "raw": "\"SubY\"",
                      "value": "SubY",
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
        "start": 412,
        "end": 416,
        "decorators": [],
        "name": "Sub6",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 425,
        "end": 430,
        "decorators": [],
        "name": "Base6",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 482,
      "end": 561,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 509,
        "end": 561,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 515,
            "end": 559,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 523,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 523,
              "end": 559,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 526,
                "end": 559,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 536,
                    "end": 553,
                    "argument": {
                      "type": "CallExpression",
                      "start": 543,
                      "end": 552,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 543,
                        "end": 550,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 543,
                          "end": 548
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 549,
                          "end": 550,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 495,
        "decorators": [],
        "name": "SubSub6",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 504,
        "end": 508,
        "decorators": [],
        "name": "Sub6",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 564,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 592,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 576,
            "decorators": [],
            "name": "results1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 579,
            "end": 592,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 583,
              "end": 590,
              "decorators": [],
              "name": "SubSub5",
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
      "start": 594,
      "end": 623,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 622,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 598,
            "end": 606,
            "decorators": [],
            "name": "results2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 609,
            "end": 622,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 613,
              "end": 620,
              "decorators": [],
              "name": "SubSub6",
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
      "type": "ExpressionStatement",
      "start": 624,
      "end": 667,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 624,
        "end": 666,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 624,
          "end": 651,
          "operator": "+",
          "left": {
            "type": "CallExpression",
            "start": 624,
            "end": 636,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 624,
              "end": 634,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 624,
                "end": 632,
                "decorators": [],
                "name": "results1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 633,
                "end": 634,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "right": {
            "type": "CallExpression",
            "start": 639,
            "end": 651,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 639,
              "end": 649,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 639,
                "end": 647,
                "decorators": [],
                "name": "results1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 648,
                "end": 649,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 654,
          "end": 666,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 654,
            "end": 664,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 654,
              "end": 662,
              "decorators": [],
              "name": "results2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
