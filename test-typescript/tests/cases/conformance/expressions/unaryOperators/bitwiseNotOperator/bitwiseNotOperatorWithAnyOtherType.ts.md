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
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 129,
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
            "end": 129,
            "properties": [
              {
                "type": "Property",
                "start": 110,
                "end": 114,
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
                  "start": 112,
                  "end": 114,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 116,
                "end": 128,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
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
                  "start": 119,
                  "end": 128,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 125,
                    "end": 128,
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
      "start": 349,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 375,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 367,
            "decorators": [],
            "name": "ResultIsNumber",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 370,
            "end": 375,
            "argument": {
              "type": "Identifier",
              "start": 371,
              "end": 375,
              "decorators": [],
              "name": "ANY1",
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 404,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 396,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 399,
            "end": 404,
            "argument": {
              "type": "Identifier",
              "start": 400,
              "end": 404,
              "decorators": [],
              "name": "ANY2",
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 406,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 410,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 425,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 428,
            "end": 430,
            "argument": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 451,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 454,
            "end": 456,
            "argument": {
              "type": "Identifier",
              "start": 455,
              "end": 456,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 484,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 477,
            "decorators": [],
            "name": "ResultIsNumber4",
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
            "operator": "~",
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
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 513,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 505,
            "decorators": [],
            "name": "ResultIsNumber5",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 508,
            "end": 513,
            "argument": {
              "type": "Identifier",
              "start": 509,
              "end": 513,
              "decorators": [],
              "name": "obj1",
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 536,
      "end": 569,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 540,
          "end": 568,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 540,
            "end": 555,
            "decorators": [],
            "name": "ResultIsNumber6",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 558,
            "end": 568,
            "argument": {
              "type": "Identifier",
              "start": 559,
              "end": 568,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 570,
      "end": 598,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 574,
          "end": 597,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 574,
            "end": 589,
            "decorators": [],
            "name": "ResultIsNumber7",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 592,
            "end": 597,
            "argument": {
              "type": "Literal",
              "start": 593,
              "end": 597,
              "raw": "null",
              "value": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 624,
      "end": 654,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 628,
          "end": 654,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 628,
            "end": 643,
            "decorators": [],
            "name": "ResultIsNumber8",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 646,
            "end": 654,
            "argument": {
              "type": "MemberExpression",
              "start": 647,
              "end": 654,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 647,
                "end": 651,
                "decorators": [],
                "name": "ANY2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 652,
                "end": 653,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 655,
      "end": 685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 684,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 674,
            "decorators": [],
            "name": "ResultIsNumber9",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 677,
            "end": 684,
            "argument": {
              "type": "MemberExpression",
              "start": 678,
              "end": 684,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 678,
                "end": 682,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 686,
      "end": 717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 716,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 690,
            "end": 706,
            "decorators": [],
            "name": "ResultIsNumber10",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 709,
            "end": 716,
            "argument": {
              "type": "MemberExpression",
              "start": 710,
              "end": 716,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 710,
                "end": 714,
                "decorators": [],
                "name": "obj1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 749,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 748,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 738,
            "decorators": [],
            "name": "ResultIsNumber11",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 741,
            "end": 748,
            "argument": {
              "type": "MemberExpression",
              "start": 742,
              "end": 748,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 742,
                "end": 746,
                "decorators": [],
                "name": "objA",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 747,
                "end": 748,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 750,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 754,
          "end": 777,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 754,
            "end": 770,
            "decorators": [],
            "name": "ResultIsNumber12",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 773,
            "end": 777,
            "argument": {
              "type": "MemberExpression",
              "start": 774,
              "end": 777,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 774,
                "end": 775,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 779,
      "end": 809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 783,
          "end": 808,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 783,
            "end": 799,
            "decorators": [],
            "name": "ResultIsNumber13",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 802,
            "end": 808,
            "argument": {
              "type": "CallExpression",
              "start": 803,
              "end": 808,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 803,
                "end": 806,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 810,
      "end": 842,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 841,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 830,
            "decorators": [],
            "name": "ResultIsNumber14",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 833,
            "end": 841,
            "argument": {
              "type": "CallExpression",
              "start": 834,
              "end": 841,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 834,
                "end": 839,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 835,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 836,
                  "end": 839,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 843,
      "end": 880,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 847,
          "end": 879,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 847,
            "end": 863,
            "decorators": [],
            "name": "ResultIsNumber15",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 866,
            "end": 879,
            "argument": {
              "type": "BinaryExpression",
              "start": 868,
              "end": 878,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 868,
                "end": 871,
                "decorators": [],
                "name": "ANY",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 874,
                "end": 878,
                "decorators": [],
                "name": "ANY1",
                "optional": false
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 881,
      "end": 924,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 885,
          "end": 923,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 885,
            "end": 901,
            "decorators": [],
            "name": "ResultIsNumber16",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 904,
            "end": 923,
            "argument": {
              "type": "BinaryExpression",
              "start": 906,
              "end": 922,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 906,
                "end": 910,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Identifier",
                "start": 913,
                "end": 922,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 925,
      "end": 963,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 929,
          "end": 962,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 945,
            "decorators": [],
            "name": "ResultIsNumber17",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 948,
            "end": 962,
            "argument": {
              "type": "BinaryExpression",
              "start": 950,
              "end": 961,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 950,
                "end": 954,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Literal",
                "start": 957,
                "end": 961,
                "raw": "null",
                "value": null
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 964,
      "end": 1012,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 968,
          "end": 1011,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 968,
            "end": 984,
            "decorators": [],
            "name": "ResultIsNumber18",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 987,
            "end": 1011,
            "argument": {
              "type": "BinaryExpression",
              "start": 989,
              "end": 1010,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 989,
                "end": 998,
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1001,
                "end": 1010,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1038,
      "end": 1067,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1042,
          "end": 1066,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1058,
            "decorators": [],
            "name": "ResultIsNumber19",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1061,
            "end": 1066,
            "argument": {
              "type": "UnaryExpression",
              "start": 1062,
              "end": 1066,
              "argument": {
                "type": "Identifier",
                "start": 1063,
                "end": 1066,
                "decorators": [],
                "name": "ANY",
                "optional": false
              },
              "operator": "~",
              "prefix": true
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1068,
      "end": 1107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1072,
          "end": 1106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1072,
            "end": 1088,
            "decorators": [],
            "name": "ResultIsNumber20",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1091,
            "end": 1106,
            "argument": {
              "type": "UnaryExpression",
              "start": 1092,
              "end": 1106,
              "argument": {
                "type": "UnaryExpression",
                "start": 1093,
                "end": 1106,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1095,
                  "end": 1105,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1095,
                    "end": 1098,
                    "decorators": [],
                    "name": "ANY",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1105,
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false
                  }
                },
                "operator": "~",
                "prefix": true
              },
              "operator": "~",
              "prefix": true
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1137,
      "end": 1142,
      "expression": {
        "type": "UnaryExpression",
        "start": 1137,
        "end": 1141,
        "argument": {
          "type": "Identifier",
          "start": 1138,
          "end": 1141,
          "decorators": [],
          "name": "ANY",
          "optional": false
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1143,
      "end": 1149,
      "expression": {
        "type": "UnaryExpression",
        "start": 1143,
        "end": 1148,
        "argument": {
          "type": "Identifier",
          "start": 1144,
          "end": 1148,
          "decorators": [],
          "name": "ANY1",
          "optional": false
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1150,
      "end": 1159,
      "expression": {
        "type": "UnaryExpression",
        "start": 1150,
        "end": 1158,
        "argument": {
          "type": "MemberExpression",
          "start": 1151,
          "end": 1158,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1151,
            "end": 1155,
            "decorators": [],
            "name": "ANY2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1156,
            "end": 1157,
            "raw": "0",
            "value": 0
          }
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1160,
      "end": 1171,
      "expression": {
        "type": "SequenceExpression",
        "start": 1160,
        "end": 1170,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1160,
            "end": 1164,
            "argument": {
              "type": "Identifier",
              "start": 1161,
              "end": 1164,
              "decorators": [],
              "name": "ANY",
              "optional": false
            },
            "operator": "~",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 1166,
            "end": 1170,
            "decorators": [],
            "name": "ANY1",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1172,
      "end": 1180,
      "expression": {
        "type": "UnaryExpression",
        "start": 1172,
        "end": 1179,
        "argument": {
          "type": "MemberExpression",
          "start": 1173,
          "end": 1179,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1173,
            "end": 1177,
            "decorators": [],
            "name": "obj1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1178,
            "end": 1179,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1181,
      "end": 1189,
      "expression": {
        "type": "UnaryExpression",
        "start": 1181,
        "end": 1188,
        "argument": {
          "type": "MemberExpression",
          "start": 1182,
          "end": 1188,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1182,
            "end": 1186,
            "decorators": [],
            "name": "objA",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1187,
            "end": 1188,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1190,
      "end": 1195,
      "expression": {
        "type": "UnaryExpression",
        "start": 1190,
        "end": 1194,
        "argument": {
          "type": "MemberExpression",
          "start": 1191,
          "end": 1194,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1191,
            "end": 1192,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1193,
            "end": 1194,
            "decorators": [],
            "name": "n",
            "optional": false
          }
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1196,
      "end": 1205,
      "expression": {
        "type": "UnaryExpression",
        "start": 1196,
        "end": 1204,
        "argument": {
          "type": "UnaryExpression",
          "start": 1197,
          "end": 1204,
          "argument": {
            "type": "MemberExpression",
            "start": 1198,
            "end": 1204,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1198,
              "end": 1202,
              "decorators": [],
              "name": "obj1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1203,
              "end": 1204,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          "operator": "~",
          "prefix": true
        },
        "operator": "~",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
