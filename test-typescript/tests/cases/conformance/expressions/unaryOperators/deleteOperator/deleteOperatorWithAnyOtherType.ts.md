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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 82,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
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
      "start": 85,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 102,
          "definite": false,
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
                },
                "typeParameters": null
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
      "start": 104,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 137,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 122,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 124,
                "end": 136,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 127,
                  "end": 136,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 133,
                    "end": 136,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
      "start": 139,
      "end": 187,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 276,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 276,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 202,
            "end": 216,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 274,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 274,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 194,
        "end": 195,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 277,
      "end": 312,
      "body": {
        "type": "TSModuleBlock",
        "start": 286,
        "end": 312,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 292,
            "end": 310,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 299,
              "end": 310,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 303,
                  "end": 309,
                  "definite": false,
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
        "start": 284,
        "end": 285,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "A",
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
      "start": 350,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 384,
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 380,
              "end": 384,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 416,
              "end": 420,
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 518,
              "end": 521,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 553,
              "end": 557,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 610,
              "end": 619,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Literal",
              "start": 651,
              "end": 655,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 712,
              "end": 719,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 712,
                "end": 716,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 717,
                "end": 718,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 752,
              "end": 758,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 752,
                "end": 756,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 791,
              "end": 797,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 791,
                "end": 795,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 830,
              "end": 836,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 830,
                "end": 834,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 835,
                "end": 836,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 869,
              "end": 872,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 869,
                "end": 870,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 871,
                "end": 872,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 905,
              "end": 910,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 905,
                "end": 908,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 943,
              "end": 950,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 943,
                "end": 948,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 943,
                  "end": 944,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 948,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 984,
              "end": 994,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 984,
                "end": 987,
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null
              },
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
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 1029,
              "end": 1045,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1029,
                "end": 1033,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
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
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 1080,
              "end": 1091,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1080,
                "end": 1084,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 1087,
                "end": 1091,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 1126,
              "end": 1147,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1126,
                "end": 1135,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
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
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "UnaryExpression",
              "start": 1212,
              "end": 1222,
              "argument": {
                "type": "Identifier",
                "start": 1219,
                "end": 1222,
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "delete",
              "prefix": true
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "UnaryExpression",
              "start": 1255,
              "end": 1281,
              "argument": {
                "type": "UnaryExpression",
                "start": 1262,
                "end": 1281,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1270,
                  "end": 1280,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1270,
                    "end": 1273,
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                "operator": "delete",
                "prefix": true
              },
              "operator": "delete",
              "prefix": true
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1313,
      "end": 1324,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1313,
        "end": 1323,
        "argument": {
          "type": "Identifier",
          "start": 1320,
          "end": 1323,
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1325,
      "end": 1337,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1325,
        "end": 1336,
        "argument": {
          "type": "Identifier",
          "start": 1332,
          "end": 1336,
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1338,
      "end": 1353,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1338,
        "end": 1352,
        "argument": {
          "type": "MemberExpression",
          "start": 1345,
          "end": 1352,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1345,
            "end": 1349,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1350,
            "end": 1351,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1354,
      "end": 1371,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 1354,
        "end": 1370,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1354,
            "end": 1364,
            "argument": {
              "type": "Identifier",
              "start": 1361,
              "end": 1364,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1372,
      "end": 1386,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1372,
        "end": 1385,
        "argument": {
          "type": "MemberExpression",
          "start": 1379,
          "end": 1385,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1379,
            "end": 1383,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1384,
            "end": 1385,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1387,
      "end": 1401,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1387,
        "end": 1400,
        "argument": {
          "type": "MemberExpression",
          "start": 1394,
          "end": 1400,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1394,
            "end": 1398,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1399,
            "end": 1400,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1402,
      "end": 1416,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1402,
        "end": 1415,
        "argument": {
          "type": "MemberExpression",
          "start": 1409,
          "end": 1415,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1409,
            "end": 1413,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1414,
            "end": 1415,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1417,
      "end": 1428,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1417,
        "end": 1427,
        "argument": {
          "type": "MemberExpression",
          "start": 1424,
          "end": 1427,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1424,
            "end": 1425,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1426,
            "end": 1427,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
