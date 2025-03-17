__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1081,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 296,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 87,
            "end": 109,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 114,
            "end": 150,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 141,
              "name": "ro",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
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
            "accessibility": "public"
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 155,
            "end": 191,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 180,
              "name": "readonlyProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 180,
              "end": 191,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 190,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 184,
                  "end": 190
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 196,
            "end": 217,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 206,
              "end": 217,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 208,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 210,
                  "end": 216
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 222,
            "end": 254,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 243,
              "name": "mismatch",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 243,
              "end": 254,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 245,
                "end": 253,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 247,
                  "end": 253
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 259,
            "end": 294,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 280,
              "name": "mismatch",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 280,
              "end": 294,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 281,
                  "end": 292,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 292,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 286,
                      "end": 292
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 79,
          "end": 80,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 297,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 304,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 313,
        "end": 314,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 315,
        "end": 426,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 321,
            "end": 353,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 332,
              "name": "ro",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 335,
              "end": 352,
              "value": "readonly please",
              "raw": "\"readonly please\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 358,
            "end": 386,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 377,
              "name": "notAllowed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 391,
            "end": 424,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 413,
              "name": "concreteWithNoBody",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 413,
              "end": 424,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 415,
                "end": 423,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 417,
                  "end": 423
                }
              }
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
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 432,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 435,
            "end": 442,
            "callee": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 446,
            "end": 448,
            "name": "ro",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 530,
        "name": "WrongTypeProperty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 531,
        "end": 560,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 537,
            "end": 558,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 561,
      "end": 643,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 588,
        "name": "WrongTypePropertyImpl",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 597,
        "end": 614,
        "name": "WrongTypeProperty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 615,
        "end": 643,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 621,
            "end": 641,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 621,
              "end": 624,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 627,
              "end": 640,
              "value": "nope, wrong",
              "raw": "\"nope, wrong\""
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
      "start": 644,
      "end": 712,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 676,
        "name": "WrongTypeAccessor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 677,
        "end": 712,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 683,
            "end": 710,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 699,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 699,
              "end": 710,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 701,
                "end": 709,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 703,
                  "end": 709
                }
              }
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
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 713,
      "end": 810,
      "id": {
        "type": "Identifier",
        "start": 719,
        "end": 740,
        "name": "WrongTypeAccessorImpl",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 749,
        "end": 766,
        "name": "WrongTypeAccessor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 767,
        "end": 810,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 773,
            "end": 808,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 777,
              "end": 780,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 780,
              "end": 808,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
    },
    {
      "type": "ClassDeclaration",
      "start": 811,
      "end": 894,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 839,
        "name": "WrongTypeAccessorImpl2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 848,
        "end": 865,
        "name": "WrongTypeAccessor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 866,
        "end": 894,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 872,
            "end": 892,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 872,
              "end": 875,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 878,
              "end": 891,
              "value": "nope, wrong",
              "raw": "\"nope, wrong\""
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
      "start": 896,
      "end": 1080,
      "id": {
        "type": "Identifier",
        "start": 911,
        "end": 935,
        "name": "AbstractAccessorMismatch",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 936,
        "end": 1080,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 942,
            "end": 968,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 955,
              "end": 957,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 957,
              "end": 968,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 959,
                "end": 967,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 961,
                  "end": 967
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 973,
            "end": 996,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 977,
              "end": 979,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 979,
              "end": 996,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 980,
                  "end": 991,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 983,
                    "end": 991,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 985,
                      "end": 991
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 993,
                "end": 996,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1002,
            "end": 1044,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1006,
              "end": 1008,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1008,
              "end": 1044,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1010,
                "end": 1018,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1012,
                  "end": 1018
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 1049,
            "end": 1078,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1062,
              "end": 1064,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1064,
              "end": 1078,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1076,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1068,
                    "end": 1076,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1070,
                      "end": 1076
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
