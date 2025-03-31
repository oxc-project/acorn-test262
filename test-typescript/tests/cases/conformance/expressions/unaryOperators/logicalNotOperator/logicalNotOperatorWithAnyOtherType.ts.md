__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 1205,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 39,
            "name": "ANY",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 39,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 36,
                "end": 39
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
      "start": 41,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "name": "ANY1",
            "typeAnnotation": null,
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
      "start": 51,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 66,
            "name": "ANY2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 66,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 61,
                "end": 66,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 61,
                  "end": 64
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 69,
            "end": 77,
            "elements": [
              {
                "type": "Literal",
                "start": 70,
                "end": 72,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 74,
                "end": 76,
                "value": "",
                "raw": "\"\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 96,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 96,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 88,
                "end": 96,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 94,
                    "end": 96,
                    "members": []
                  }
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
      "type": "VariableDeclaration",
      "start": 97,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 105,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 108,
            "end": 130,
            "properties": [
              {
                "type": "Property",
                "start": 110,
                "end": 115,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 113,
                  "end": 115,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 117,
                "end": 129,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 120,
                  "end": 129,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 126,
                    "end": 129,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
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
        "start": 152,
        "end": 180,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 158,
            "end": 164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 162,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "a",
                  "typeAnnotation": null,
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
            "type": "ReturnStatement",
            "start": 169,
            "end": 178,
            "argument": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 146,
        "end": 151,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 148,
          "end": 151
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 189,
        "end": 269,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 195,
            "end": 209,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "a",
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
              "start": 203,
              "end": 208,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 205,
                "end": 208
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 267,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 224,
              "end": 267,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 227,
                "end": 267,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 237,
                    "end": 243,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 241,
                        "end": 242,
                        "id": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "name": "a",
                          "typeAnnotation": null,
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
                    "type": "ReturnStatement",
                    "start": 252,
                    "end": 261,
                    "argument": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "name": "a",
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
      "type": "TSModuleDeclaration",
      "start": 270,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 278,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 279,
        "end": 305,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 285,
            "end": 303,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 292,
              "end": 303,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 296,
                  "end": 302,
                  "id": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 302,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 302,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 299,
                        "end": 302
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 324,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 314,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 317,
            "end": 324,
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "name": "A",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 363,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 366,
            "end": 371,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 367,
              "end": 371,
              "name": "ANY1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 373,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 393,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 396,
            "end": 401,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 397,
              "end": 401,
              "name": "ANY2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 423,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 426,
            "end": 428,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 450,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 453,
            "end": 455,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 461,
          "end": 484,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 477,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 480,
            "end": 484,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 481,
              "end": 484,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 515,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 514,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 506,
            "name": "ResultIsBoolean6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 509,
            "end": 514,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 510,
              "end": 514,
              "name": "obj1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 571,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 570,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 557,
            "name": "ResultIsBoolean7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 560,
            "end": 570,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 561,
              "end": 570,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 576,
          "end": 600,
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 592,
            "name": "ResultIsBoolean8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 595,
            "end": 600,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 596,
              "end": 600,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 658,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 647,
            "name": "ResultIsBoolean9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 650,
            "end": 658,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 651,
              "end": 658,
              "object": {
                "type": "Identifier",
                "start": 651,
                "end": 655,
                "name": "ANY2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 656,
                "end": 657,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 660,
      "end": 692,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 691,
          "id": {
            "type": "Identifier",
            "start": 664,
            "end": 681,
            "name": "ResultIsBoolean10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 684,
            "end": 691,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 685,
              "end": 691,
              "object": {
                "type": "Identifier",
                "start": 685,
                "end": 689,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 690,
                "end": 691,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 693,
      "end": 725,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 724,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 714,
            "name": "ResultIsBoolean11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 717,
            "end": 724,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 718,
              "end": 724,
              "object": {
                "type": "Identifier",
                "start": 718,
                "end": 722,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 723,
                "end": 724,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 726,
      "end": 758,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 730,
          "end": 757,
          "id": {
            "type": "Identifier",
            "start": 730,
            "end": 747,
            "name": "ResultIsBoolean12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 750,
            "end": 757,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 751,
              "end": 757,
              "object": {
                "type": "Identifier",
                "start": 751,
                "end": 755,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 756,
                "end": 757,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 759,
      "end": 788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 763,
          "end": 787,
          "id": {
            "type": "Identifier",
            "start": 763,
            "end": 780,
            "name": "ResultIsBoolean13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 783,
            "end": 787,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 784,
              "end": 787,
              "object": {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 786,
                "end": 787,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 789,
      "end": 820,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 793,
          "end": 819,
          "id": {
            "type": "Identifier",
            "start": 793,
            "end": 810,
            "name": "ResultIsBoolean14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 813,
            "end": 819,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 814,
              "end": 819,
              "callee": {
                "type": "Identifier",
                "start": 814,
                "end": 817,
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 825,
          "end": 853,
          "id": {
            "type": "Identifier",
            "start": 825,
            "end": 842,
            "name": "ResultIsBoolean15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 845,
            "end": 853,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 846,
              "end": 853,
              "callee": {
                "type": "MemberExpression",
                "start": 846,
                "end": 851,
                "object": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 847,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 848,
                  "end": 851,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 855,
      "end": 893,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 892,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 876,
            "name": "ResultIsBoolean16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 879,
            "end": 892,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 881,
              "end": 891,
              "left": {
                "type": "Identifier",
                "start": 881,
                "end": 884,
                "name": "ANY",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 887,
                "end": 891,
                "name": "ANY1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 894,
      "end": 938,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 898,
          "end": 937,
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 915,
            "name": "ResultIsBoolean17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 918,
            "end": 937,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 920,
              "end": 936,
              "left": {
                "type": "Literal",
                "start": 920,
                "end": 924,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 927,
                "end": 936,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 939,
      "end": 978,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 943,
          "end": 977,
          "id": {
            "type": "Identifier",
            "start": 943,
            "end": 960,
            "name": "ResultIsBoolean18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 963,
            "end": 977,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 965,
              "end": 976,
              "left": {
                "type": "Literal",
                "start": 965,
                "end": 969,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 972,
                "end": 976,
                "value": null,
                "raw": "null"
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 979,
      "end": 1028,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 983,
          "end": 1027,
          "id": {
            "type": "Identifier",
            "start": 983,
            "end": 1000,
            "name": "ResultIsBoolean19",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1003,
            "end": 1027,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 1005,
              "end": 1026,
              "left": {
                "type": "Identifier",
                "start": 1005,
                "end": 1014,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1017,
                "end": 1026,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1054,
      "end": 1084,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1058,
          "end": 1083,
          "id": {
            "type": "Identifier",
            "start": 1058,
            "end": 1075,
            "name": "ResultIsBoolean20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1078,
            "end": 1083,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 1079,
              "end": 1083,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1080,
                "end": 1083,
                "name": "ANY",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1085,
      "end": 1125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1089,
          "end": 1124,
          "id": {
            "type": "Identifier",
            "start": 1089,
            "end": 1106,
            "name": "ResultIsBoolean21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1109,
            "end": 1124,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 1110,
              "end": 1124,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1111,
                "end": 1124,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1113,
                  "end": 1123,
                  "left": {
                    "type": "Identifier",
                    "start": 1113,
                    "end": 1116,
                    "name": "ANY",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1123,
                    "name": "ANY1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1156,
      "end": 1161,
      "expression": {
        "type": "UnaryExpression",
        "start": 1156,
        "end": 1160,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1157,
          "end": 1160,
          "name": "ANY",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1162,
      "end": 1168,
      "expression": {
        "type": "UnaryExpression",
        "start": 1162,
        "end": 1167,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1163,
          "end": 1167,
          "name": "ANY1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1169,
      "end": 1178,
      "expression": {
        "type": "UnaryExpression",
        "start": 1169,
        "end": 1177,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1170,
          "end": 1177,
          "object": {
            "type": "Identifier",
            "start": 1170,
            "end": 1174,
            "name": "ANY2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1175,
            "end": 1176,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1179,
      "end": 1190,
      "expression": {
        "type": "SequenceExpression",
        "start": 1179,
        "end": 1189,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1179,
            "end": 1183,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 1180,
              "end": 1183,
              "name": "ANY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 1185,
            "end": 1189,
            "name": "ANY1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1191,
      "end": 1199,
      "expression": {
        "type": "UnaryExpression",
        "start": 1191,
        "end": 1198,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1192,
          "end": 1198,
          "object": {
            "type": "Identifier",
            "start": 1192,
            "end": 1196,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1197,
            "end": 1198,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1200,
      "end": 1205,
      "expression": {
        "type": "UnaryExpression",
        "start": 1200,
        "end": 1204,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1201,
          "end": 1204,
          "object": {
            "type": "Identifier",
            "start": 1201,
            "end": 1202,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1203,
            "end": 1204,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
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
