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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 39,
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 39,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 36,
                "end": 39
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
      "start": 41,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "ANY1",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 66,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
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
            }
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
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 74,
                "end": 76,
                "raw": "\"\"",
                "value": ""
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 96,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 96,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 88,
                "end": 96,
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
      "start": 97,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 105,
            "decorators": [],
            "name": "obj1",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
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
                  "start": 113,
                  "end": 115,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 117,
                "end": 129,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 120,
                  "end": 129,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 126,
                    "end": 129,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
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
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 180,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 169,
            "end": 178,
            "argument": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 189,
        "end": 269,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 195,
            "end": 209,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
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
              "start": 203,
              "end": 208,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 205,
                "end": 208
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 267,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
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
              "start": 224,
              "end": 267,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 252,
                    "end": 261,
                    "argument": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "a",
                      "optional": false
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
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 270,
      "end": 305,
      "body": {
        "type": "TSModuleBlock",
        "start": 279,
        "end": 305,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 285,
            "end": 303,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 292,
              "end": 303,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 296,
                  "end": 302,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 302,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 302,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 299,
                        "end": 302
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
        "start": 277,
        "end": 278,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 314,
            "decorators": [],
            "name": "objA",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 317,
            "end": 324,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
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
      "start": 343,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 363,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 366,
            "end": 371,
            "argument": {
              "type": "Identifier",
              "start": 367,
              "end": 371,
              "decorators": [],
              "name": "ANY1",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 393,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 396,
            "end": 401,
            "argument": {
              "type": "Identifier",
              "start": 397,
              "end": 401,
              "decorators": [],
              "name": "ANY2",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 423,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 426,
            "end": 428,
            "argument": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 450,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 453,
            "end": 455,
            "argument": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 477,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 480,
            "end": 484,
            "argument": {
              "type": "Identifier",
              "start": 481,
              "end": 484,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 506,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 509,
            "end": 514,
            "argument": {
              "type": "Identifier",
              "start": 510,
              "end": 514,
              "decorators": [],
              "name": "obj1",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 557,
            "decorators": [],
            "name": "ResultIsBoolean7",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 560,
            "end": 570,
            "argument": {
              "type": "Identifier",
              "start": 561,
              "end": 570,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 592,
            "decorators": [],
            "name": "ResultIsBoolean8",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 595,
            "end": 600,
            "argument": {
              "type": "Literal",
              "start": 596,
              "end": 600,
              "raw": "null",
              "value": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 647,
            "decorators": [],
            "name": "ResultIsBoolean9",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 650,
            "end": 658,
            "argument": {
              "type": "MemberExpression",
              "start": 651,
              "end": 658,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 651,
                "end": 655,
                "decorators": [],
                "name": "ANY2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 656,
                "end": 657,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 664,
            "end": 681,
            "decorators": [],
            "name": "ResultIsBoolean10",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 684,
            "end": 691,
            "argument": {
              "type": "MemberExpression",
              "start": 685,
              "end": 691,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 685,
                "end": 689,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 690,
                "end": 691,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 714,
            "decorators": [],
            "name": "ResultIsBoolean11",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 717,
            "end": 724,
            "argument": {
              "type": "MemberExpression",
              "start": 718,
              "end": 724,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 718,
                "end": 722,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 723,
                "end": 724,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 730,
            "end": 747,
            "decorators": [],
            "name": "ResultIsBoolean12",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 750,
            "end": 757,
            "argument": {
              "type": "MemberExpression",
              "start": 751,
              "end": 757,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 751,
                "end": 755,
                "decorators": [],
                "name": "objA",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 756,
                "end": 757,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 763,
            "end": 780,
            "decorators": [],
            "name": "ResultIsBoolean13",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 783,
            "end": 787,
            "argument": {
              "type": "MemberExpression",
              "start": 784,
              "end": 787,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 786,
                "end": 787,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 793,
            "end": 810,
            "decorators": [],
            "name": "ResultIsBoolean14",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 813,
            "end": 819,
            "argument": {
              "type": "CallExpression",
              "start": 814,
              "end": 819,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 814,
                "end": 817,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 825,
            "end": 842,
            "decorators": [],
            "name": "ResultIsBoolean15",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 845,
            "end": 853,
            "argument": {
              "type": "CallExpression",
              "start": 846,
              "end": 853,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 846,
                "end": 851,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 847,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 848,
                  "end": 851,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 876,
            "decorators": [],
            "name": "ResultIsBoolean16",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 879,
            "end": 892,
            "argument": {
              "type": "BinaryExpression",
              "start": 881,
              "end": 891,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 881,
                "end": 884,
                "decorators": [],
                "name": "ANY",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 887,
                "end": 891,
                "decorators": [],
                "name": "ANY1",
                "optional": false
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 915,
            "decorators": [],
            "name": "ResultIsBoolean17",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 918,
            "end": 937,
            "argument": {
              "type": "BinaryExpression",
              "start": 920,
              "end": 936,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 920,
                "end": 924,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Identifier",
                "start": 927,
                "end": 936,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 943,
            "end": 960,
            "decorators": [],
            "name": "ResultIsBoolean18",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 963,
            "end": 977,
            "argument": {
              "type": "BinaryExpression",
              "start": 965,
              "end": 976,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 965,
                "end": 969,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Literal",
                "start": 972,
                "end": 976,
                "raw": "null",
                "value": null
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 983,
            "end": 1000,
            "decorators": [],
            "name": "ResultIsBoolean19",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1003,
            "end": 1027,
            "argument": {
              "type": "BinaryExpression",
              "start": 1005,
              "end": 1026,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1005,
                "end": 1014,
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1017,
                "end": 1026,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1058,
            "end": 1075,
            "decorators": [],
            "name": "ResultIsBoolean20",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1078,
            "end": 1083,
            "argument": {
              "type": "UnaryExpression",
              "start": 1079,
              "end": 1083,
              "argument": {
                "type": "Identifier",
                "start": 1080,
                "end": 1083,
                "decorators": [],
                "name": "ANY",
                "optional": false
              },
              "operator": "!",
              "prefix": true
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1089,
            "end": 1106,
            "decorators": [],
            "name": "ResultIsBoolean21",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1109,
            "end": 1124,
            "argument": {
              "type": "UnaryExpression",
              "start": 1110,
              "end": 1124,
              "argument": {
                "type": "UnaryExpression",
                "start": 1111,
                "end": 1124,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1113,
                  "end": 1123,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1113,
                    "end": 1116,
                    "decorators": [],
                    "name": "ANY",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1123,
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false
                  }
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1156,
      "end": 1161,
      "expression": {
        "type": "UnaryExpression",
        "start": 1156,
        "end": 1160,
        "argument": {
          "type": "Identifier",
          "start": 1157,
          "end": 1160,
          "decorators": [],
          "name": "ANY",
          "optional": false
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1162,
      "end": 1168,
      "expression": {
        "type": "UnaryExpression",
        "start": 1162,
        "end": 1167,
        "argument": {
          "type": "Identifier",
          "start": 1163,
          "end": 1167,
          "decorators": [],
          "name": "ANY1",
          "optional": false
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1169,
      "end": 1178,
      "expression": {
        "type": "UnaryExpression",
        "start": 1169,
        "end": 1177,
        "argument": {
          "type": "MemberExpression",
          "start": 1170,
          "end": 1177,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1170,
            "end": 1174,
            "decorators": [],
            "name": "ANY2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1175,
            "end": 1176,
            "raw": "0",
            "value": 0
          }
        },
        "operator": "!",
        "prefix": true
      }
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
            "argument": {
              "type": "Identifier",
              "start": 1180,
              "end": 1183,
              "decorators": [],
              "name": "ANY",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 1185,
            "end": 1189,
            "decorators": [],
            "name": "ANY1",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1191,
      "end": 1199,
      "expression": {
        "type": "UnaryExpression",
        "start": 1191,
        "end": 1198,
        "argument": {
          "type": "MemberExpression",
          "start": 1192,
          "end": 1198,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1192,
            "end": 1196,
            "decorators": [],
            "name": "objA",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1197,
            "end": 1198,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1200,
      "end": 1205,
      "expression": {
        "type": "UnaryExpression",
        "start": 1200,
        "end": 1204,
        "argument": {
          "type": "MemberExpression",
          "start": 1201,
          "end": 1204,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1201,
            "end": 1202,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1203,
            "end": 1204,
            "decorators": [],
            "name": "n",
            "optional": false
          }
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
