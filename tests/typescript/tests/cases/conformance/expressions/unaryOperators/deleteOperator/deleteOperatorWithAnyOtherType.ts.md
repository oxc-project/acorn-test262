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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 45,
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 45,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 56,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 84,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 72,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 103,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 102,
            "decorators": [],
            "name": "obj",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 122,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 124,
                "end": 136,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 127,
                  "end": 136,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 133,
                    "end": 136,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 153,
        "end": 158,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 155,
          "end": 158
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 159,
        "end": 187,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 165,
            "end": 171,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 169,
                "end": 170,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 276,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 276,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 202,
            "end": 216,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 274,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 274,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 274,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 244,
                    "end": 250,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 248,
                        "end": 249,
                        "id": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "type": "TSModuleDeclaration",
      "start": 277,
      "end": 312,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 303,
                  "end": 309,
                  "id": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 309,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 304,
                      "end": 309,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 306,
                        "end": 309
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 321,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 324,
            "end": 331,
            "callee": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "A",
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
      "start": 350,
      "end": 385,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 370,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 373,
            "end": 384,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 380,
              "end": 384,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 421,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 420,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 406,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 409,
            "end": 420,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 416,
              "end": 420,
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 422,
      "end": 454,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 453,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 442,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 445,
            "end": 453,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 455,
      "end": 487,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 486,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 475,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 478,
            "end": 486,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 522,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 508,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 511,
            "end": 521,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 518,
              "end": 521,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 558,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 527,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 527,
            "end": 543,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 546,
            "end": 557,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 553,
              "end": 557,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 580,
      "end": 620,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 619,
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 600,
            "decorators": [],
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 603,
            "end": 619,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 610,
              "end": 619,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 621,
      "end": 656,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 655,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 641,
            "decorators": [],
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 644,
            "end": 655,
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "start": 651,
              "end": 655,
              "value": null,
              "raw": "null"
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 720,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 719,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 702,
            "decorators": [],
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 705,
            "end": 719,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 712,
              "end": 719,
              "object": {
                "type": "Identifier",
                "start": 712,
                "end": 716,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 717,
                "end": 718,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 721,
      "end": 759,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 725,
          "end": 758,
          "id": {
            "type": "Identifier",
            "start": 725,
            "end": 742,
            "decorators": [],
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 745,
            "end": 758,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 752,
              "end": 758,
              "object": {
                "type": "Identifier",
                "start": 752,
                "end": 756,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 760,
      "end": 798,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 764,
          "end": 797,
          "id": {
            "type": "Identifier",
            "start": 764,
            "end": 781,
            "decorators": [],
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 784,
            "end": 797,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 791,
              "end": 797,
              "object": {
                "type": "Identifier",
                "start": 791,
                "end": 795,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 799,
      "end": 837,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 820,
            "decorators": [],
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 823,
            "end": 836,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 830,
              "end": 836,
              "object": {
                "type": "Identifier",
                "start": 830,
                "end": 834,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 835,
                "end": 836,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 838,
      "end": 873,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 842,
          "end": 872,
          "id": {
            "type": "Identifier",
            "start": 842,
            "end": 859,
            "decorators": [],
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 862,
            "end": 872,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 869,
              "end": 872,
              "object": {
                "type": "Identifier",
                "start": 869,
                "end": 870,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 871,
                "end": 872,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 874,
      "end": 911,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 878,
          "end": 910,
          "id": {
            "type": "Identifier",
            "start": 878,
            "end": 895,
            "decorators": [],
            "name": "ResultIsBoolean14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 898,
            "end": 910,
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "start": 905,
              "end": 910,
              "callee": {
                "type": "Identifier",
                "start": 905,
                "end": 908,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 912,
      "end": 951,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 916,
          "end": 950,
          "id": {
            "type": "Identifier",
            "start": 916,
            "end": 933,
            "decorators": [],
            "name": "ResultIsBoolean15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 936,
            "end": 950,
            "operator": "delete",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 948,
                  "decorators": [],
                  "name": "foo",
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
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 952,
      "end": 996,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 956,
          "end": 995,
          "id": {
            "type": "Identifier",
            "start": 956,
            "end": 973,
            "decorators": [],
            "name": "ResultIsBoolean16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 976,
            "end": 995,
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "start": 984,
              "end": 994,
              "left": {
                "type": "Identifier",
                "start": 984,
                "end": 987,
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 990,
                "end": 994,
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 997,
      "end": 1047,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1001,
          "end": 1046,
          "id": {
            "type": "Identifier",
            "start": 1001,
            "end": 1018,
            "decorators": [],
            "name": "ResultIsBoolean17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1021,
            "end": 1046,
            "operator": "delete",
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
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1048,
      "end": 1093,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1052,
          "end": 1092,
          "id": {
            "type": "Identifier",
            "start": 1052,
            "end": 1069,
            "decorators": [],
            "name": "ResultIsBoolean18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1072,
            "end": 1092,
            "operator": "delete",
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
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1094,
      "end": 1149,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1098,
          "end": 1148,
          "id": {
            "type": "Identifier",
            "start": 1098,
            "end": 1115,
            "decorators": [],
            "name": "ResultIsBoolean19",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1118,
            "end": 1148,
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "start": 1126,
              "end": 1147,
              "left": {
                "type": "Identifier",
                "start": 1126,
                "end": 1135,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1138,
                "end": 1147,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1181,
      "end": 1223,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1185,
          "end": 1222,
          "id": {
            "type": "Identifier",
            "start": 1185,
            "end": 1202,
            "decorators": [],
            "name": "ResultIsBoolean20",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1205,
            "end": 1222,
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "start": 1212,
              "end": 1222,
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "start": 1219,
                "end": 1222,
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1224,
      "end": 1282,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1228,
          "end": 1281,
          "id": {
            "type": "Identifier",
            "start": 1228,
            "end": 1245,
            "decorators": [],
            "name": "ResultIsBoolean21",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1248,
            "end": 1281,
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "start": 1255,
              "end": 1281,
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "start": 1262,
                "end": 1281,
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1270,
                  "end": 1280,
                  "left": {
                    "type": "Identifier",
                    "start": 1270,
                    "end": 1273,
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1280,
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "prefix": true
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
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
        "argument": {
          "type": "Identifier",
          "start": 1320,
          "end": 1323,
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 1332,
          "end": 1336,
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 1345,
          "end": 1352,
          "object": {
            "type": "Identifier",
            "start": 1345,
            "end": 1349,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1350,
            "end": 1351,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "prefix": true
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
            "argument": {
              "type": "Identifier",
              "start": 1361,
              "end": 1364,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 1366,
            "end": 1370,
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null
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
        "argument": {
          "type": "MemberExpression",
          "start": 1379,
          "end": 1385,
          "object": {
            "type": "Identifier",
            "start": 1379,
            "end": 1383,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1384,
            "end": 1385,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 1394,
          "end": 1400,
          "object": {
            "type": "Identifier",
            "start": 1394,
            "end": 1398,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1399,
            "end": 1400,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 1409,
          "end": 1415,
          "object": {
            "type": "Identifier",
            "start": 1409,
            "end": 1413,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1414,
            "end": 1415,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
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
        "argument": {
          "type": "MemberExpression",
          "start": 1424,
          "end": 1427,
          "object": {
            "type": "Identifier",
            "start": 1424,
            "end": 1425,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1426,
            "end": 1427,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
