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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 43,
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
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
      "start": 45,
      "end": 54,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 53,
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
      "start": 55,
      "end": 82,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 70,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 100,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 100,
            "decorators": [],
            "name": "obj",
            "optional": false,
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
      "start": 101,
      "end": 123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 109,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 115,
                  "end": 117,
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
                "start": 118,
                "end": 121,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "value": 1,
                  "raw": "1"
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
      "start": 125,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
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
        "start": 139,
        "end": 144,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 141,
          "end": 144
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 145,
        "end": 173,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 157,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 156,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
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
            "start": 162,
            "end": 171,
            "argument": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
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
      "start": 174,
      "end": 262,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 181,
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
        "start": 182,
        "end": 262,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 188,
            "end": 202,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "start": 207,
            "end": 260,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 260,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 220,
                "end": 260,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 230,
                    "end": 236,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 234,
                        "end": 235,
                        "id": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 235,
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
                    "start": 245,
                    "end": 254,
                    "argument": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
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
      "start": 263,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 289,
                  "end": 295,
                  "id": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 295,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 290,
                      "end": 295,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 292,
                        "end": 295
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
      "start": 299,
      "end": 318,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 307,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 310,
            "end": 317,
            "callee": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
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
      "start": 336,
      "end": 365,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 352,
            "decorators": [],
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 355,
            "end": 364,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 360,
              "end": 364,
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
      "start": 366,
      "end": 395,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 382,
            "decorators": [],
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 385,
            "end": 394,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 390,
              "end": 394,
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
      "start": 396,
      "end": 422,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 421,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 412,
            "decorators": [],
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 421,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
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
      "start": 423,
      "end": 449,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 448,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 439,
            "decorators": [],
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 442,
            "end": 448,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
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
      "start": 450,
      "end": 478,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 466,
            "decorators": [],
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 469,
            "end": 477,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
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
      "start": 479,
      "end": 508,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 507,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 495,
            "decorators": [],
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 498,
            "end": 507,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 503,
              "end": 507,
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
      "start": 530,
      "end": 564,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 563,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 546,
            "decorators": [],
            "name": "ResultIsAny7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 549,
            "end": 563,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 554,
              "end": 563,
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
      "start": 565,
      "end": 594,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 581,
            "decorators": [],
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 584,
            "end": 593,
            "operator": "void",
            "argument": {
              "type": "Literal",
              "start": 589,
              "end": 593,
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
      "start": 620,
      "end": 651,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 624,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 624,
            "end": 636,
            "decorators": [],
            "name": "ResultIsAny9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 639,
            "end": 651,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 644,
              "end": 651,
              "object": {
                "type": "Identifier",
                "start": 644,
                "end": 648,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 649,
                "end": 650,
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
      "start": 652,
      "end": 684,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 656,
          "end": 683,
          "id": {
            "type": "Identifier",
            "start": 656,
            "end": 669,
            "decorators": [],
            "name": "ResultIsAny10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 672,
            "end": 683,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 677,
              "end": 683,
              "object": {
                "type": "Identifier",
                "start": 677,
                "end": 681,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 682,
                "end": 683,
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
      "start": 685,
      "end": 717,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 689,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 689,
            "end": 702,
            "decorators": [],
            "name": "ResultIsAny11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 705,
            "end": 716,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 710,
              "end": 716,
              "object": {
                "type": "Identifier",
                "start": 710,
                "end": 714,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
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
      "start": 718,
      "end": 750,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 749,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 735,
            "decorators": [],
            "name": "ResultIsAny12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 738,
            "end": 749,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 743,
              "end": 749,
              "object": {
                "type": "Identifier",
                "start": 743,
                "end": 747,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 748,
                "end": 749,
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
      "start": 751,
      "end": 780,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 755,
          "end": 779,
          "id": {
            "type": "Identifier",
            "start": 755,
            "end": 768,
            "decorators": [],
            "name": "ResultIsAny13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 771,
            "end": 779,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 776,
              "end": 779,
              "object": {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 778,
                "end": 779,
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
      "start": 781,
      "end": 812,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 785,
          "end": 811,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 798,
            "decorators": [],
            "name": "ResultIsAny14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 801,
            "end": 811,
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "start": 806,
              "end": 811,
              "callee": {
                "type": "Identifier",
                "start": 806,
                "end": 809,
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
      "start": 813,
      "end": 846,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 817,
          "end": 845,
          "id": {
            "type": "Identifier",
            "start": 817,
            "end": 830,
            "decorators": [],
            "name": "ResultIsAny15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 833,
            "end": 845,
            "operator": "void",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 843,
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
      "start": 847,
      "end": 885,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 851,
          "end": 884,
          "id": {
            "type": "Identifier",
            "start": 851,
            "end": 864,
            "decorators": [],
            "name": "ResultIsAny16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 867,
            "end": 884,
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "start": 873,
              "end": 883,
              "left": {
                "type": "Identifier",
                "start": 873,
                "end": 876,
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 879,
                "end": 883,
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
      "start": 886,
      "end": 930,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 890,
          "end": 929,
          "id": {
            "type": "Identifier",
            "start": 890,
            "end": 903,
            "decorators": [],
            "name": "ResultIsAny17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 906,
            "end": 929,
            "operator": "void",
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
      "start": 931,
      "end": 970,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 935,
          "end": 969,
          "id": {
            "type": "Identifier",
            "start": 935,
            "end": 948,
            "decorators": [],
            "name": "ResultIsAny18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 951,
            "end": 969,
            "operator": "void",
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
      "start": 971,
      "end": 1020,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 975,
          "end": 1019,
          "id": {
            "type": "Identifier",
            "start": 975,
            "end": 988,
            "decorators": [],
            "name": "ResultIsAny19",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 991,
            "end": 1019,
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "start": 997,
              "end": 1018,
              "left": {
                "type": "Identifier",
                "start": 997,
                "end": 1006,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1009,
                "end": 1018,
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
      "start": 1050,
      "end": 1084,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1054,
          "end": 1083,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1067,
            "decorators": [],
            "name": "ResultIsAny20",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1070,
            "end": 1083,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 1075,
              "end": 1083,
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "start": 1080,
                "end": 1083,
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
      "start": 1085,
      "end": 1133,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1089,
          "end": 1132,
          "id": {
            "type": "Identifier",
            "start": 1089,
            "end": 1102,
            "decorators": [],
            "name": "ResultIsAny21",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1105,
            "end": 1132,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 1110,
              "end": 1132,
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "start": 1115,
                "end": 1132,
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1121,
                  "end": 1131,
                  "left": {
                    "type": "Identifier",
                    "start": 1121,
                    "end": 1124,
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1127,
                    "end": 1131,
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
      "start": 1164,
      "end": 1173,
      "expression": {
        "type": "UnaryExpression",
        "start": 1164,
        "end": 1172,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 1169,
          "end": 1172,
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
      "start": 1174,
      "end": 1184,
      "expression": {
        "type": "UnaryExpression",
        "start": 1174,
        "end": 1183,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 1179,
          "end": 1183,
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
      "start": 1185,
      "end": 1198,
      "expression": {
        "type": "UnaryExpression",
        "start": 1185,
        "end": 1197,
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "start": 1190,
          "end": 1197,
          "object": {
            "type": "Identifier",
            "start": 1190,
            "end": 1194,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1195,
            "end": 1196,
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
            "argument": {
              "type": "Identifier",
              "start": 1204,
              "end": 1207,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 1209,
            "end": 1213,
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
      "start": 1215,
      "end": 1227,
      "expression": {
        "type": "UnaryExpression",
        "start": 1215,
        "end": 1226,
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "start": 1220,
          "end": 1226,
          "object": {
            "type": "Identifier",
            "start": 1220,
            "end": 1224,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1225,
            "end": 1226,
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
      "start": 1228,
      "end": 1237,
      "expression": {
        "type": "UnaryExpression",
        "start": 1228,
        "end": 1236,
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "start": 1233,
          "end": 1236,
          "object": {
            "type": "Identifier",
            "start": 1233,
            "end": 1234,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1235,
            "end": 1236,
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
