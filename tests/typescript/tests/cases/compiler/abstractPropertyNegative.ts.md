__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1080,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 50,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 31,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 36,
            "end": 48,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 296,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 79,
          "end": 80,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 296,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 87,
            "end": 109,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
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
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 114,
            "end": 150,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 141,
              "decorators": [],
              "name": "ro",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public"
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 155,
            "end": 191,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 180,
              "decorators": [],
              "name": "readonlyProp",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 180,
              "end": 191,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 190,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 184,
                  "end": 190
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 196,
            "end": 217,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 206,
              "end": 217,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 208,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 210,
                  "end": 216
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 222,
            "end": 254,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 243,
              "decorators": [],
              "name": "mismatch",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 243,
              "end": 254,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 245,
                "end": 253,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 247,
                  "end": 253
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 259,
            "end": 294,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 280,
              "decorators": [],
              "name": "mismatch",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 280,
              "end": 294,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 281,
                  "end": 292,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 292,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 286,
                      "end": 292
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 297,
      "end": 426,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 304,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 313,
        "end": 314,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 315,
        "end": 426,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 321,
            "end": 353,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 332,
              "decorators": [],
              "name": "ro",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 335,
              "end": 352,
              "value": "readonly please",
              "raw": "\"readonly please\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 358,
            "end": 386,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 377,
              "decorators": [],
              "name": "notAllowed",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 385,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 379,
                "end": 385
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 391,
            "end": 424,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 413,
              "decorators": [],
              "name": "concreteWithNoBody",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 413,
              "end": 424,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 415,
                "end": 423,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 417,
                  "end": 423
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "get",
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
      "start": 427,
      "end": 443,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 432,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 435,
            "end": 442,
            "callee": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "decorators": [],
              "name": "C",
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
      "start": 444,
      "end": 496,
      "expression": {
        "type": "AssignmentExpression",
        "start": 444,
        "end": 495,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 444,
          "end": 448,
          "object": {
            "type": "Identifier",
            "start": 444,
            "end": 445,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 446,
            "end": 448,
            "decorators": [],
            "name": "ro",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 451,
          "end": 495,
          "value": "error: lhs of assignment can't be readonly",
          "raw": "\"error: lhs of assignment can't be readonly\""
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 498,
      "end": 560,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 530,
        "decorators": [],
        "name": "WrongTypeProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 531,
        "end": 560,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 537,
            "end": 558,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 557,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 551,
                "end": 557
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
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 561,
      "end": 643,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 588,
        "decorators": [],
        "name": "WrongTypePropertyImpl",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 597,
        "end": 614,
        "decorators": [],
        "name": "WrongTypeProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 615,
        "end": 643,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 621,
            "end": 641,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 621,
              "end": 624,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 627,
              "end": 640,
              "value": "nope, wrong",
              "raw": "\"nope, wrong\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 644,
      "end": 712,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 676,
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 677,
        "end": 712,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 683,
            "end": 710,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 699,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 699,
              "end": 710,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 701,
                "end": 709,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 703,
                  "end": 709
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 713,
      "end": 810,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 719,
        "end": 740,
        "decorators": [],
        "name": "WrongTypeAccessorImpl",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 749,
        "end": 766,
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 767,
        "end": 810,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 773,
            "end": 808,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 777,
              "end": 780,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 780,
              "end": 808,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 783,
                "end": 808,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 785,
                    "end": 806,
                    "argument": {
                      "type": "Literal",
                      "start": 792,
                      "end": 805,
                      "value": "nope, wrong",
                      "raw": "\"nope, wrong\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
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
      "start": 811,
      "end": 894,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 839,
        "decorators": [],
        "name": "WrongTypeAccessorImpl2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 848,
        "end": 865,
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 866,
        "end": 894,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 872,
            "end": 892,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 872,
              "end": 875,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 878,
              "end": 891,
              "value": "nope, wrong",
              "raw": "\"nope, wrong\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 896,
      "end": 1080,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 911,
        "end": 935,
        "decorators": [],
        "name": "AbstractAccessorMismatch",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 936,
        "end": 1080,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 942,
            "end": 968,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 955,
              "end": 957,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 957,
              "end": 968,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 959,
                "end": 967,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 961,
                  "end": 967
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 973,
            "end": 996,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 977,
              "end": 979,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 979,
              "end": 996,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 980,
                  "end": 991,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 983,
                    "end": 991,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 985,
                      "end": 991
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 993,
                "end": 996,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1002,
            "end": 1044,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1006,
              "end": 1008,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1008,
              "end": 1044,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1010,
                "end": 1018,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1012,
                  "end": 1018
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1019,
                "end": 1044,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1021,
                    "end": 1042,
                    "argument": {
                      "type": "Literal",
                      "start": 1028,
                      "end": 1041,
                      "value": "should work",
                      "raw": "\"should work\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 1049,
            "end": 1078,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1062,
              "end": 1064,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1064,
              "end": 1078,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1076,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1068,
                    "end": 1076,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1070,
                      "end": 1076
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
