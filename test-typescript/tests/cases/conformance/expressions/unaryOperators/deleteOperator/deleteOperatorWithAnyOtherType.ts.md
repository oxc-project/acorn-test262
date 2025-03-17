__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 1428,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 45,
            "name": "ANY",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 45,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
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
      "start": 47,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
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
      "start": 57,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 72,
            "name": "ANY2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 72,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 67,
                "end": 72,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 67,
                  "end": 70
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 75,
            "end": 83,
            "elements": [
              {
                "type": "Literal",
                "start": 76,
                "end": 78,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 82,
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
      "start": 85,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 102,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 102,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 94,
                "end": 102,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 97,
                  "end": 102,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 100,
                    "end": 102,
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
      "start": 104,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 115,
            "end": 137,
            "properties": [
              {
                "type": "Property",
                "start": 117,
                "end": 122,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 122,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 124,
                "end": 136,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 127,
                  "end": 136,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 133,
                    "end": 136,
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
      "start": 139,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
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
        "start": 159,
        "end": 187,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 165,
            "end": 171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 169,
                "end": 170,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
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
            "start": 176,
            "end": 185,
            "argument": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
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
        "start": 153,
        "end": 158,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 155,
          "end": 158
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 276,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 202,
            "end": 216,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
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
              "start": 210,
              "end": 215,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 274,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 274,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 274,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 244,
                    "end": 250,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 248,
                        "end": 249,
                        "id": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
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
                    "start": 259,
                    "end": 268,
                    "argument": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
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
      "start": 277,
      "end": 312,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 286,
        "end": 312,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 292,
            "end": 310,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 299,
              "end": 310,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 303,
                  "end": 309,
                  "id": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 309,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 304,
                      "end": 309,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 306,
                        "end": 309
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
      "start": 313,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 321,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 324,
            "end": 331,
            "callee": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
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
      "start": 350,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 370,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 373,
            "end": 384,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 380,
              "end": 384,
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
      "start": 386,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 420,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 406,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 409,
            "end": 420,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 416,
              "end": 420,
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
      "start": 422,
      "end": 454,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 453,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 442,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 445,
            "end": 453,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
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
      "start": 455,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 486,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 475,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 478,
            "end": 486,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
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
      "start": 488,
      "end": 522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 508,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 511,
            "end": 521,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 518,
              "end": 521,
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
      "start": 523,
      "end": 558,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 527,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 527,
            "end": 543,
            "name": "ResultIsBoolean6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 546,
            "end": 557,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 553,
              "end": 557,
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
      "start": 580,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 619,
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 600,
            "name": "ResultIsBoolean7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 603,
            "end": 619,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 610,
              "end": 619,
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
      "start": 621,
      "end": 656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 655,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 641,
            "name": "ResultIsBoolean8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 644,
            "end": 655,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 651,
              "end": 655,
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
      "start": 682,
      "end": 720,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 719,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 702,
            "name": "ResultIsBoolean9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 705,
            "end": 719,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 712,
              "end": 719,
              "object": {
                "type": "Identifier",
                "start": 712,
                "end": 716,
                "name": "ANY2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 717,
                "end": 718,
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
      "start": 721,
      "end": 759,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 725,
          "end": 758,
          "id": {
            "type": "Identifier",
            "start": 725,
            "end": 742,
            "name": "ResultIsBoolean10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 745,
            "end": 758,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 752,
              "end": 758,
              "object": {
                "type": "Identifier",
                "start": 752,
                "end": 756,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
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
      "start": 760,
      "end": 798,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 764,
          "end": 797,
          "id": {
            "type": "Identifier",
            "start": 764,
            "end": 781,
            "name": "ResultIsBoolean11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 784,
            "end": 797,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 791,
              "end": 797,
              "object": {
                "type": "Identifier",
                "start": 791,
                "end": 795,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
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
      "start": 799,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 820,
            "name": "ResultIsBoolean12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 823,
            "end": 836,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 830,
              "end": 836,
              "object": {
                "type": "Identifier",
                "start": 830,
                "end": 834,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 835,
                "end": 836,
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
      "start": 838,
      "end": 873,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 842,
          "end": 872,
          "id": {
            "type": "Identifier",
            "start": 842,
            "end": 859,
            "name": "ResultIsBoolean13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 862,
            "end": 872,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 869,
              "end": 872,
              "object": {
                "type": "Identifier",
                "start": 869,
                "end": 870,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 871,
                "end": 872,
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
      "start": 874,
      "end": 911,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 878,
          "end": 910,
          "id": {
            "type": "Identifier",
            "start": 878,
            "end": 895,
            "name": "ResultIsBoolean14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 898,
            "end": 910,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 905,
              "end": 910,
              "callee": {
                "type": "Identifier",
                "start": 905,
                "end": 908,
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
      "start": 912,
      "end": 951,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 916,
          "end": 950,
          "id": {
            "type": "Identifier",
            "start": 916,
            "end": 933,
            "name": "ResultIsBoolean15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 936,
            "end": 950,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 943,
              "end": 950,
              "callee": {
                "type": "MemberExpression",
                "start": 943,
                "end": 948,
                "object": {
                  "type": "Identifier",
                  "start": 943,
                  "end": 944,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 948,
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
      "start": 952,
      "end": 996,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 956,
          "end": 995,
          "id": {
            "type": "Identifier",
            "start": 956,
            "end": 973,
            "name": "ResultIsBoolean16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 976,
            "end": 995,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 984,
              "end": 994,
              "left": {
                "type": "Identifier",
                "start": 984,
                "end": 987,
                "name": "ANY",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 990,
                "end": 994,
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
      "start": 997,
      "end": 1047,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1001,
          "end": 1046,
          "id": {
            "type": "Identifier",
            "start": 1001,
            "end": 1018,
            "name": "ResultIsBoolean17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1021,
            "end": 1046,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 1029,
              "end": 1045,
              "left": {
                "type": "Literal",
                "start": 1029,
                "end": 1033,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1036,
                "end": 1045,
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
      "start": 1048,
      "end": 1093,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1052,
          "end": 1092,
          "id": {
            "type": "Identifier",
            "start": 1052,
            "end": 1069,
            "name": "ResultIsBoolean18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1072,
            "end": 1092,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 1080,
              "end": 1091,
              "left": {
                "type": "Literal",
                "start": 1080,
                "end": 1084,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 1087,
                "end": 1091,
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
      "start": 1094,
      "end": 1149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1098,
          "end": 1148,
          "id": {
            "type": "Identifier",
            "start": 1098,
            "end": 1115,
            "name": "ResultIsBoolean19",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1118,
            "end": 1148,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 1126,
              "end": 1147,
              "left": {
                "type": "Identifier",
                "start": 1126,
                "end": 1135,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1138,
                "end": 1147,
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
      "start": 1181,
      "end": 1223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1185,
          "end": 1222,
          "id": {
            "type": "Identifier",
            "start": 1185,
            "end": 1202,
            "name": "ResultIsBoolean20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1205,
            "end": 1222,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 1212,
              "end": 1222,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1219,
                "end": 1222,
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
      "start": 1224,
      "end": 1282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1228,
          "end": 1281,
          "id": {
            "type": "Identifier",
            "start": 1228,
            "end": 1245,
            "name": "ResultIsBoolean21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1248,
            "end": 1281,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 1255,
              "end": 1281,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1262,
                "end": 1281,
                "operator": "delete",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1270,
                  "end": 1280,
                  "left": {
                    "type": "Identifier",
                    "start": 1270,
                    "end": 1273,
                    "name": "ANY",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1280,
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
      "start": 1313,
      "end": 1324,
      "expression": {
        "type": "UnaryExpression",
        "start": 1313,
        "end": 1323,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1320,
          "end": 1323,
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
      "start": 1325,
      "end": 1337,
      "expression": {
        "type": "UnaryExpression",
        "start": 1325,
        "end": 1336,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1332,
          "end": 1336,
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
      "start": 1338,
      "end": 1353,
      "expression": {
        "type": "UnaryExpression",
        "start": 1338,
        "end": 1352,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1345,
          "end": 1352,
          "object": {
            "type": "Identifier",
            "start": 1345,
            "end": 1349,
            "name": "ANY2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1350,
            "end": 1351,
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
      "start": 1354,
      "end": 1371,
      "expression": {
        "type": "SequenceExpression",
        "start": 1354,
        "end": 1370,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1354,
            "end": 1364,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 1361,
              "end": 1364,
              "name": "ANY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 1366,
            "end": 1370,
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
      "start": 1372,
      "end": 1386,
      "expression": {
        "type": "UnaryExpression",
        "start": 1372,
        "end": 1385,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1379,
          "end": 1385,
          "object": {
            "type": "Identifier",
            "start": 1379,
            "end": 1383,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1384,
            "end": 1385,
            "name": "x",
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
      "start": 1387,
      "end": 1401,
      "expression": {
        "type": "UnaryExpression",
        "start": 1387,
        "end": 1400,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1394,
          "end": 1400,
          "object": {
            "type": "Identifier",
            "start": 1394,
            "end": 1398,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1399,
            "end": 1400,
            "name": "y",
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
      "start": 1402,
      "end": 1416,
      "expression": {
        "type": "UnaryExpression",
        "start": 1402,
        "end": 1415,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1409,
          "end": 1415,
          "object": {
            "type": "Identifier",
            "start": 1409,
            "end": 1413,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1414,
            "end": 1415,
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
      "start": 1417,
      "end": 1428,
      "expression": {
        "type": "UnaryExpression",
        "start": 1417,
        "end": 1427,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1424,
          "end": 1427,
          "object": {
            "type": "Identifier",
            "start": 1424,
            "end": 1425,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1426,
            "end": 1427,
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
