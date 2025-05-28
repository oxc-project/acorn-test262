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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 70,
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
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 70,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "BaseX",
                      "raw": "\"BaseX\""
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 122,
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
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 122,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "BaseY",
                      "raw": "\"BaseY\""
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 200,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 200,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 157,
            "end": 198,
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
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 198,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "SubX",
                      "raw": "\"SubX\""
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 202,
      "end": 330,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 229,
        "end": 330,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 279,
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
            "value": {
              "type": "FunctionExpression",
              "start": 243,
              "end": 279,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 263,
                        "end": 270,
                        "object": {
                          "type": "Super",
                          "start": 263,
                          "end": 268
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 270,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 328,
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
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 328,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 312,
                        "end": 319,
                        "object": {
                          "type": "Super",
                          "start": 312,
                          "end": 317
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 318,
                          "end": 319,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 342,
      "end": 404,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 354,
        "end": 404,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 360,
            "end": 402,
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
            "value": {
              "type": "FunctionExpression",
              "start": 368,
              "end": 402,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "BaseX",
                      "raw": "\"BaseX\""
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 406,
      "end": 480,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 431,
        "end": 480,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 437,
            "end": 478,
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
            "value": {
              "type": "FunctionExpression",
              "start": 445,
              "end": 478,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "SubY",
                      "raw": "\"SubY\""
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 482,
      "end": 561,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 509,
        "end": 561,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 515,
            "end": 559,
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
            "value": {
              "type": "FunctionExpression",
              "start": 523,
              "end": 559,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 543,
                        "end": 550,
                        "object": {
                          "type": "Super",
                          "start": 543,
                          "end": 548
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 549,
                          "end": 550,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 564,
      "end": 593,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 592,
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
            "callee": {
              "type": "Identifier",
              "start": 583,
              "end": 590,
              "decorators": [],
              "name": "SubSub5",
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
      "start": 594,
      "end": 623,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 622,
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
            "callee": {
              "type": "Identifier",
              "start": 613,
              "end": 620,
              "decorators": [],
              "name": "SubSub6",
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
      "type": "ExpressionStatement",
      "start": 624,
      "end": 667,
      "expression": {
        "type": "BinaryExpression",
        "start": 624,
        "end": 666,
        "left": {
          "type": "BinaryExpression",
          "start": 624,
          "end": 651,
          "left": {
            "type": "CallExpression",
            "start": 624,
            "end": 636,
            "callee": {
              "type": "MemberExpression",
              "start": 624,
              "end": 634,
              "object": {
                "type": "Identifier",
                "start": 624,
                "end": 632,
                "decorators": [],
                "name": "results1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 633,
                "end": 634,
                "decorators": [],
                "name": "x",
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
          "operator": "+",
          "right": {
            "type": "CallExpression",
            "start": 639,
            "end": 651,
            "callee": {
              "type": "MemberExpression",
              "start": 639,
              "end": 649,
              "object": {
                "type": "Identifier",
                "start": 639,
                "end": 647,
                "decorators": [],
                "name": "results1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 648,
                "end": 649,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        },
        "operator": "+",
        "right": {
          "type": "CallExpression",
          "start": 654,
          "end": 666,
          "callee": {
            "type": "MemberExpression",
            "start": 654,
            "end": 664,
            "object": {
              "type": "Identifier",
              "start": 654,
              "end": 662,
              "decorators": [],
              "name": "results2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
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
