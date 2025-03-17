__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 1237,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 43,
            "name": "ANY",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
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
      "start": 45,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 53,
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
      "start": 55,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 70,
            "name": "ANY2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 70,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 65,
                "end": 70,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 65,
                  "end": 68
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 73,
            "end": 81,
            "elements": [
              {
                "type": "Literal",
                "start": 74,
                "end": 76,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 78,
                "end": 80,
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
      "start": 83,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 100,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 100,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 92,
                "end": 100,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 100,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 98,
                    "end": 100,
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
      "start": 101,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 109,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 112,
            "end": 122,
            "properties": [
              {
                "type": "Property",
                "start": 113,
                "end": 117,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 115,
                  "end": 117,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 118,
                "end": 121,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "value": 1,
                  "raw": "1"
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
      "start": 125,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
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
        "start": 145,
        "end": 173,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 157,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 156,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
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
            "start": 162,
            "end": 171,
            "argument": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
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
        "start": 139,
        "end": 144,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 141,
          "end": 144
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 174,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 181,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 262,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 188,
            "end": 202,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
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
              "start": 196,
              "end": 201,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 198,
                "end": 201
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 207,
            "end": 260,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 260,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 220,
                "end": 260,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 230,
                    "end": 236,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 234,
                        "end": 235,
                        "id": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 235,
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
                    "start": 245,
                    "end": 254,
                    "argument": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
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
      "start": 263,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 272,
        "end": 298,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 278,
            "end": 296,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 285,
              "end": 296,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 289,
                  "end": 295,
                  "id": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 295,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 290,
                      "end": 295,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 292,
                        "end": 295
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
      "start": 299,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 307,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 310,
            "end": 317,
            "callee": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
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
      "start": 336,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 352,
            "name": "ResultIsAny1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 355,
            "end": 364,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 360,
              "end": 364,
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
      "start": 366,
      "end": 395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 382,
            "name": "ResultIsAny2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 385,
            "end": 394,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 390,
              "end": 394,
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
      "start": 396,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 421,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 412,
            "name": "ResultIsAny3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 421,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
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
      "start": 423,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 448,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 439,
            "name": "ResultIsAny4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 442,
            "end": 448,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
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
      "start": 450,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 466,
            "name": "ResultIsAny5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 469,
            "end": 477,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
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
      "start": 479,
      "end": 508,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 507,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 495,
            "name": "ResultIsAny6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 498,
            "end": 507,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 503,
              "end": 507,
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
      "start": 530,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 563,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 546,
            "name": "ResultIsAny7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 549,
            "end": 563,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 554,
              "end": 563,
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
      "start": 565,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 581,
            "name": "ResultIsAny8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 584,
            "end": 593,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 589,
              "end": 593,
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
      "start": 620,
      "end": 651,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 624,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 624,
            "end": 636,
            "name": "ResultIsAny9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 639,
            "end": 651,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 644,
              "end": 651,
              "object": {
                "type": "Identifier",
                "start": 644,
                "end": 648,
                "name": "ANY2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 649,
                "end": 650,
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
      "start": 652,
      "end": 684,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 656,
          "end": 683,
          "id": {
            "type": "Identifier",
            "start": 656,
            "end": 669,
            "name": "ResultIsAny10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 672,
            "end": 683,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 677,
              "end": 683,
              "object": {
                "type": "Identifier",
                "start": 677,
                "end": 681,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 682,
                "end": 683,
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
      "start": 685,
      "end": 717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 689,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 689,
            "end": 702,
            "name": "ResultIsAny11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 705,
            "end": 716,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 710,
              "end": 716,
              "object": {
                "type": "Identifier",
                "start": 710,
                "end": 714,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
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
      "start": 718,
      "end": 750,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 749,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 735,
            "name": "ResultIsAny12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 738,
            "end": 749,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 743,
              "end": 749,
              "object": {
                "type": "Identifier",
                "start": 743,
                "end": 747,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 748,
                "end": 749,
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
      "start": 751,
      "end": 780,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 755,
          "end": 779,
          "id": {
            "type": "Identifier",
            "start": 755,
            "end": 768,
            "name": "ResultIsAny13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 771,
            "end": 779,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 776,
              "end": 779,
              "object": {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 778,
                "end": 779,
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
      "start": 781,
      "end": 812,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 785,
          "end": 811,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 798,
            "name": "ResultIsAny14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 801,
            "end": 811,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 806,
              "end": 811,
              "callee": {
                "type": "Identifier",
                "start": 806,
                "end": 809,
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
      "start": 813,
      "end": 846,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 817,
          "end": 845,
          "id": {
            "type": "Identifier",
            "start": 817,
            "end": 830,
            "name": "ResultIsAny15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 833,
            "end": 845,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 838,
              "end": 845,
              "callee": {
                "type": "MemberExpression",
                "start": 838,
                "end": 843,
                "object": {
                  "type": "Identifier",
                  "start": 838,
                  "end": 839,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 843,
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
      "start": 847,
      "end": 885,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 851,
          "end": 884,
          "id": {
            "type": "Identifier",
            "start": 851,
            "end": 864,
            "name": "ResultIsAny16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 867,
            "end": 884,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 873,
              "end": 883,
              "left": {
                "type": "Identifier",
                "start": 873,
                "end": 876,
                "name": "ANY",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 879,
                "end": 883,
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
      "start": 886,
      "end": 930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 890,
          "end": 929,
          "id": {
            "type": "Identifier",
            "start": 890,
            "end": 903,
            "name": "ResultIsAny17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 906,
            "end": 929,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 912,
              "end": 928,
              "left": {
                "type": "Literal",
                "start": 912,
                "end": 916,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 919,
                "end": 928,
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
      "start": 931,
      "end": 970,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 935,
          "end": 969,
          "id": {
            "type": "Identifier",
            "start": 935,
            "end": 948,
            "name": "ResultIsAny18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 951,
            "end": 969,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 957,
              "end": 968,
              "left": {
                "type": "Literal",
                "start": 957,
                "end": 961,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 964,
                "end": 968,
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
      "start": 971,
      "end": 1020,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 975,
          "end": 1019,
          "id": {
            "type": "Identifier",
            "start": 975,
            "end": 988,
            "name": "ResultIsAny19",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 991,
            "end": 1019,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 997,
              "end": 1018,
              "left": {
                "type": "Identifier",
                "start": 997,
                "end": 1006,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1009,
                "end": 1018,
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
      "start": 1050,
      "end": 1084,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1054,
          "end": 1083,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1067,
            "name": "ResultIsAny20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1070,
            "end": 1083,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 1075,
              "end": 1083,
              "operator": "void",
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
      "end": 1133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1089,
          "end": 1132,
          "id": {
            "type": "Identifier",
            "start": 1089,
            "end": 1102,
            "name": "ResultIsAny21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1105,
            "end": 1132,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 1110,
              "end": 1132,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1115,
                "end": 1132,
                "operator": "void",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1121,
                  "end": 1131,
                  "left": {
                    "type": "Identifier",
                    "start": 1121,
                    "end": 1124,
                    "name": "ANY",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1127,
                    "end": 1131,
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
      "start": 1164,
      "end": 1173,
      "expression": {
        "type": "UnaryExpression",
        "start": 1164,
        "end": 1172,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1169,
          "end": 1172,
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
      "start": 1174,
      "end": 1184,
      "expression": {
        "type": "UnaryExpression",
        "start": 1174,
        "end": 1183,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1179,
          "end": 1183,
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
      "start": 1185,
      "end": 1198,
      "expression": {
        "type": "UnaryExpression",
        "start": 1185,
        "end": 1197,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1190,
          "end": 1197,
          "object": {
            "type": "Identifier",
            "start": 1190,
            "end": 1194,
            "name": "ANY2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1195,
            "end": 1196,
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
      "start": 1199,
      "end": 1214,
      "expression": {
        "type": "SequenceExpression",
        "start": 1199,
        "end": 1213,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1199,
            "end": 1207,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 1204,
              "end": 1207,
              "name": "ANY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 1209,
            "end": 1213,
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
      "start": 1215,
      "end": 1227,
      "expression": {
        "type": "UnaryExpression",
        "start": 1215,
        "end": 1226,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1220,
          "end": 1226,
          "object": {
            "type": "Identifier",
            "start": 1220,
            "end": 1224,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1225,
            "end": 1226,
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
      "start": 1228,
      "end": 1237,
      "expression": {
        "type": "UnaryExpression",
        "start": 1228,
        "end": 1236,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1233,
          "end": 1236,
          "object": {
            "type": "Identifier",
            "start": 1233,
            "end": 1234,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1235,
            "end": 1236,
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
