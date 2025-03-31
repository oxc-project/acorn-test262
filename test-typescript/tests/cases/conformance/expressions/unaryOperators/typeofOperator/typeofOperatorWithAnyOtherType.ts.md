__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 1589,
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
      "end": 102,
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
      "start": 103,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 111,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 114,
            "end": 137,
            "properties": [
              {
                "type": "Property",
                "start": 116,
                "end": 122,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 119,
                  "end": 122,
                  "value": "a",
                  "raw": "\"a\""
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
      "start": 140,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
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
        "start": 160,
        "end": 188,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 166,
            "end": 172,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 170,
                "end": 171,
                "id": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
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
            "start": 177,
            "end": 186,
            "argument": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
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
        "start": 154,
        "end": 159,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 156,
          "end": 159
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 197,
        "end": 277,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 203,
            "end": 217,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
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
              "start": 211,
              "end": 216,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 213,
                "end": 216
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 275,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 232,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 232,
              "end": 275,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 235,
                "end": 275,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 245,
                    "end": 251,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 249,
                        "end": 250,
                        "id": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
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
                    "start": 260,
                    "end": 269,
                    "argument": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
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
      "start": 278,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 286,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 287,
        "end": 313,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 293,
            "end": 311,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 300,
              "end": 311,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 304,
                  "end": 310,
                  "id": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 310,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 305,
                      "end": 310,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 307,
                        "end": 310
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
      "start": 314,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 322,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 325,
            "end": 332,
            "callee": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
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
      "start": 351,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 370,
            "name": "ResultIsString1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 373,
            "end": 384,
            "operator": "typeof",
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
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 405,
            "name": "ResultIsString2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 408,
            "end": 419,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 415,
              "end": 419,
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
      "start": 421,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 440,
            "name": "ResultIsString3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 443,
            "end": 451,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
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
      "start": 453,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 483,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 472,
            "name": "ResultIsString4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 475,
            "end": 483,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
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
      "start": 485,
      "end": 518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 489,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 504,
            "name": "ResultIsString5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 507,
            "end": 517,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 514,
              "end": 517,
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
      "start": 519,
      "end": 553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 538,
            "name": "ResultIsString6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 541,
            "end": 552,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 548,
              "end": 552,
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
      "start": 575,
      "end": 614,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 579,
          "end": 613,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 594,
            "name": "ResultIsString7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 597,
            "end": 613,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 604,
              "end": 613,
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
      "start": 615,
      "end": 649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 619,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 619,
            "end": 634,
            "name": "ResultIsString8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 637,
            "end": 648,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 644,
              "end": 648,
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
      "start": 650,
      "end": 682,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 681,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 669,
            "name": "ResultIsString9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 672,
            "end": 681,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 679,
              "end": 681,
              "properties": []
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
      "start": 708,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 712,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 712,
            "end": 728,
            "name": "ResultIsString10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 731,
            "end": 745,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 738,
              "end": 745,
              "object": {
                "type": "Identifier",
                "start": 738,
                "end": 742,
                "name": "ANY2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 743,
                "end": 744,
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
      "start": 747,
      "end": 784,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 751,
          "end": 783,
          "id": {
            "type": "Identifier",
            "start": 751,
            "end": 767,
            "name": "ResultIsString11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 770,
            "end": 783,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 777,
              "end": 783,
              "object": {
                "type": "Identifier",
                "start": 777,
                "end": 781,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 782,
                "end": 783,
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
      "start": 785,
      "end": 822,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 789,
          "end": 821,
          "id": {
            "type": "Identifier",
            "start": 789,
            "end": 805,
            "name": "ResultIsString12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 808,
            "end": 821,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 815,
              "end": 821,
              "object": {
                "type": "Identifier",
                "start": 815,
                "end": 819,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 820,
                "end": 821,
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
      "start": 823,
      "end": 857,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 827,
          "end": 856,
          "id": {
            "type": "Identifier",
            "start": 827,
            "end": 843,
            "name": "ResultIsString13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 846,
            "end": 856,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 853,
              "end": 856,
              "object": {
                "type": "Identifier",
                "start": 853,
                "end": 854,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
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
      "start": 858,
      "end": 894,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 862,
          "end": 893,
          "id": {
            "type": "Identifier",
            "start": 862,
            "end": 878,
            "name": "ResultIsString14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 881,
            "end": 893,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 888,
              "end": 893,
              "callee": {
                "type": "Identifier",
                "start": 888,
                "end": 891,
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
      "start": 895,
      "end": 933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 899,
          "end": 932,
          "id": {
            "type": "Identifier",
            "start": 899,
            "end": 915,
            "name": "ResultIsString15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 918,
            "end": 932,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 925,
              "end": 932,
              "callee": {
                "type": "MemberExpression",
                "start": 925,
                "end": 930,
                "object": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 926,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 930,
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
      "start": 934,
      "end": 977,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 938,
          "end": 976,
          "id": {
            "type": "Identifier",
            "start": 938,
            "end": 954,
            "name": "ResultIsString16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 957,
            "end": 976,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 965,
              "end": 975,
              "left": {
                "type": "Identifier",
                "start": 965,
                "end": 968,
                "name": "ANY",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 971,
                "end": 975,
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
      "start": 978,
      "end": 1027,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 982,
          "end": 1026,
          "id": {
            "type": "Identifier",
            "start": 982,
            "end": 998,
            "name": "ResultIsString17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1001,
            "end": 1026,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 1009,
              "end": 1025,
              "left": {
                "type": "Literal",
                "start": 1009,
                "end": 1013,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1016,
                "end": 1025,
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
      "start": 1028,
      "end": 1072,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1032,
          "end": 1071,
          "id": {
            "type": "Identifier",
            "start": 1032,
            "end": 1048,
            "name": "ResultIsString18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1051,
            "end": 1071,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 1059,
              "end": 1070,
              "left": {
                "type": "Literal",
                "start": 1059,
                "end": 1063,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 1066,
                "end": 1070,
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
      "start": 1073,
      "end": 1127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1077,
          "end": 1126,
          "id": {
            "type": "Identifier",
            "start": 1077,
            "end": 1093,
            "name": "ResultIsString19",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1096,
            "end": 1126,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 1104,
              "end": 1125,
              "left": {
                "type": "Identifier",
                "start": 1104,
                "end": 1113,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1116,
                "end": 1125,
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
      "start": 1159,
      "end": 1200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1163,
          "end": 1199,
          "id": {
            "type": "Identifier",
            "start": 1163,
            "end": 1179,
            "name": "ResultIsString20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1182,
            "end": 1199,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 1189,
              "end": 1199,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1196,
                "end": 1199,
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
      "start": 1201,
      "end": 1258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1205,
          "end": 1257,
          "id": {
            "type": "Identifier",
            "start": 1205,
            "end": 1221,
            "name": "ResultIsString21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1224,
            "end": 1257,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 1231,
              "end": 1257,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 1238,
                "end": 1257,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1246,
                  "end": 1256,
                  "left": {
                    "type": "Identifier",
                    "start": 1246,
                    "end": 1249,
                    "name": "ANY",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1256,
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
      "start": 1289,
      "end": 1300,
      "expression": {
        "type": "UnaryExpression",
        "start": 1289,
        "end": 1299,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1296,
          "end": 1299,
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
      "start": 1301,
      "end": 1313,
      "expression": {
        "type": "UnaryExpression",
        "start": 1301,
        "end": 1312,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1308,
          "end": 1312,
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
      "start": 1314,
      "end": 1329,
      "expression": {
        "type": "UnaryExpression",
        "start": 1314,
        "end": 1328,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1321,
          "end": 1328,
          "object": {
            "type": "Identifier",
            "start": 1321,
            "end": 1325,
            "name": "ANY2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1326,
            "end": 1327,
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
      "start": 1330,
      "end": 1347,
      "expression": {
        "type": "SequenceExpression",
        "start": 1330,
        "end": 1346,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1330,
            "end": 1340,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 1337,
              "end": 1340,
              "name": "ANY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 1342,
            "end": 1346,
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
      "start": 1348,
      "end": 1360,
      "expression": {
        "type": "UnaryExpression",
        "start": 1348,
        "end": 1359,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1355,
          "end": 1359,
          "name": "obj1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1361,
      "end": 1375,
      "expression": {
        "type": "UnaryExpression",
        "start": 1361,
        "end": 1374,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1368,
          "end": 1374,
          "object": {
            "type": "Identifier",
            "start": 1368,
            "end": 1372,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1373,
            "end": 1374,
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
      "start": 1376,
      "end": 1390,
      "expression": {
        "type": "UnaryExpression",
        "start": 1376,
        "end": 1389,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1383,
          "end": 1389,
          "object": {
            "type": "Identifier",
            "start": 1383,
            "end": 1387,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1388,
            "end": 1389,
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
      "start": 1391,
      "end": 1402,
      "expression": {
        "type": "UnaryExpression",
        "start": 1391,
        "end": 1401,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1398,
          "end": 1401,
          "object": {
            "type": "Identifier",
            "start": 1398,
            "end": 1399,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1400,
            "end": 1401,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 1432,
      "end": 1443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1436,
          "end": 1442,
          "id": {
            "type": "Identifier",
            "start": 1436,
            "end": 1442,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1437,
              "end": 1442,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1439,
                "end": 1442
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
      "start": 1444,
      "end": 1457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1448,
          "end": 1456,
          "id": {
            "type": "Identifier",
            "start": 1448,
            "end": 1456,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1449,
              "end": 1456,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1451,
                "end": 1456,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1451,
                  "end": 1454
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
      "start": 1458,
      "end": 1475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1462,
          "end": 1474,
          "id": {
            "type": "Identifier",
            "start": 1462,
            "end": 1474,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1463,
              "end": 1474,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1465,
                "end": 1474,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1468,
                  "end": 1474,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1471,
                    "end": 1474
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
      "type": "LabeledStatement",
      "start": 1476,
      "end": 1490,
      "body": {
        "type": "ExpressionStatement",
        "start": 1479,
        "end": 1490,
        "expression": {
          "type": "UnaryExpression",
          "start": 1479,
          "end": 1489,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1486,
            "end": 1489,
            "name": "ANY",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "label": {
        "type": "Identifier",
        "start": 1476,
        "end": 1477,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1491,
      "end": 1506,
      "body": {
        "type": "ExpressionStatement",
        "start": 1494,
        "end": 1506,
        "expression": {
          "type": "UnaryExpression",
          "start": 1494,
          "end": 1505,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1501,
            "end": 1505,
            "name": "ANY2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "label": {
        "type": "Identifier",
        "start": 1491,
        "end": 1492,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1507,
      "end": 1521,
      "body": {
        "type": "ExpressionStatement",
        "start": 1510,
        "end": 1521,
        "expression": {
          "type": "UnaryExpression",
          "start": 1510,
          "end": 1520,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1517,
            "end": 1520,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "label": {
        "type": "Identifier",
        "start": 1507,
        "end": 1508,
        "name": "r",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1522,
      "end": 1539,
      "body": {
        "type": "ExpressionStatement",
        "start": 1525,
        "end": 1539,
        "expression": {
          "type": "UnaryExpression",
          "start": 1525,
          "end": 1538,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 1532,
            "end": 1538,
            "object": {
              "type": "Identifier",
              "start": 1532,
              "end": 1536,
              "name": "objA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1537,
              "end": 1538,
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
      "label": {
        "type": "Identifier",
        "start": 1522,
        "end": 1523,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1540,
      "end": 1556,
      "body": {
        "type": "ExpressionStatement",
        "start": 1543,
        "end": 1556,
        "expression": {
          "type": "UnaryExpression",
          "start": 1543,
          "end": 1555,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 1550,
            "end": 1555,
            "object": {
              "type": "Identifier",
              "start": 1550,
              "end": 1551,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1552,
              "end": 1555,
              "name": "foo",
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
      "label": {
        "type": "Identifier",
        "start": 1540,
        "end": 1541,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1557,
      "end": 1571,
      "body": {
        "type": "ExpressionStatement",
        "start": 1560,
        "end": 1571,
        "expression": {
          "type": "UnaryExpression",
          "start": 1560,
          "end": 1570,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 1567,
            "end": 1570,
            "object": {
              "type": "Identifier",
              "start": 1567,
              "end": 1568,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1569,
              "end": 1570,
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
      },
      "label": {
        "type": "Identifier",
        "start": 1557,
        "end": 1558,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1572,
      "end": 1589,
      "body": {
        "type": "ExpressionStatement",
        "start": 1575,
        "end": 1589,
        "expression": {
          "type": "UnaryExpression",
          "start": 1575,
          "end": 1588,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 1582,
            "end": 1588,
            "object": {
              "type": "Identifier",
              "start": 1582,
              "end": 1586,
              "name": "obj1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1587,
              "end": 1588,
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
      "label": {
        "type": "Identifier",
        "start": 1572,
        "end": 1573,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
