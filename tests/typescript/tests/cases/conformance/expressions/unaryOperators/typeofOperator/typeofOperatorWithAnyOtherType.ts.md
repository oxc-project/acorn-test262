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
                "value": ""
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 82,
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
      "start": 85,
      "end": 102,
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
      "start": 103,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 111,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
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
                  "start": 119,
                  "end": 122,
                  "raw": "\"a\"",
                  "value": "a"
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
      "start": 140,
      "end": 188,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
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
            "start": 177,
            "end": 186,
            "argument": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
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
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 154,
        "end": 159,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 156,
          "end": 159
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 277,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 197,
        "end": 277,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 203,
            "end": 217,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
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
              "start": 211,
              "end": 216,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 213,
                "end": 216
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 275,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 232,
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
              "start": 232,
              "end": 275,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
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
                    "start": 260,
                    "end": 269,
                    "argument": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
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
        "start": 195,
        "end": 196,
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
      "start": 278,
      "end": 313,
      "body": {
        "type": "TSModuleBlock",
        "start": 287,
        "end": 313,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 293,
            "end": 311,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 300,
              "end": 311,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 304,
                  "end": 310,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 310,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 305,
                      "end": 310,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 307,
                        "end": 310
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
        "start": 285,
        "end": 286,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 322,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 325,
            "end": 332,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
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
      "start": 351,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 370,
            "decorators": [],
            "name": "ResultIsString1",
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
            "operator": "typeof",
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
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 419,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 405,
            "decorators": [],
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 408,
            "end": 419,
            "argument": {
              "type": "Identifier",
              "start": 415,
              "end": 419,
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 440,
            "decorators": [],
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 443,
            "end": 451,
            "argument": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 472,
            "decorators": [],
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 475,
            "end": 483,
            "argument": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 504,
            "decorators": [],
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 507,
            "end": 517,
            "argument": {
              "type": "Identifier",
              "start": 514,
              "end": 517,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 538,
            "decorators": [],
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 541,
            "end": 552,
            "argument": {
              "type": "Identifier",
              "start": 548,
              "end": 552,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 594,
            "decorators": [],
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 597,
            "end": 613,
            "argument": {
              "type": "Identifier",
              "start": 604,
              "end": 613,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 619,
            "end": 634,
            "decorators": [],
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 637,
            "end": 648,
            "argument": {
              "type": "Literal",
              "start": 644,
              "end": 648,
              "raw": "null",
              "value": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 669,
            "decorators": [],
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 672,
            "end": 681,
            "argument": {
              "type": "ObjectExpression",
              "start": 679,
              "end": 681,
              "properties": []
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 712,
            "end": 728,
            "decorators": [],
            "name": "ResultIsString10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 731,
            "end": 745,
            "argument": {
              "type": "MemberExpression",
              "start": 738,
              "end": 745,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 738,
                "end": 742,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 743,
                "end": 744,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 751,
            "end": 767,
            "decorators": [],
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 770,
            "end": 783,
            "argument": {
              "type": "MemberExpression",
              "start": 777,
              "end": 783,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 777,
                "end": 781,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 782,
                "end": 783,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 789,
            "end": 805,
            "decorators": [],
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 808,
            "end": 821,
            "argument": {
              "type": "MemberExpression",
              "start": 815,
              "end": 821,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 815,
                "end": 819,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 820,
                "end": 821,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 827,
            "end": 843,
            "decorators": [],
            "name": "ResultIsString13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 846,
            "end": 856,
            "argument": {
              "type": "MemberExpression",
              "start": 853,
              "end": 856,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 853,
                "end": 854,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 862,
            "end": 878,
            "decorators": [],
            "name": "ResultIsString14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 881,
            "end": 893,
            "argument": {
              "type": "CallExpression",
              "start": 888,
              "end": 893,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 888,
                "end": 891,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 899,
            "end": 915,
            "decorators": [],
            "name": "ResultIsString15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 918,
            "end": 932,
            "argument": {
              "type": "CallExpression",
              "start": 925,
              "end": 932,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 925,
                "end": 930,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 926,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 930,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 938,
            "end": 954,
            "decorators": [],
            "name": "ResultIsString16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 957,
            "end": 976,
            "argument": {
              "type": "BinaryExpression",
              "start": 965,
              "end": 975,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 965,
                "end": 968,
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 971,
                "end": 975,
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 982,
            "end": 998,
            "decorators": [],
            "name": "ResultIsString17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1001,
            "end": 1026,
            "argument": {
              "type": "BinaryExpression",
              "start": 1009,
              "end": 1025,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1009,
                "end": 1013,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Identifier",
                "start": 1016,
                "end": 1025,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1032,
            "end": 1048,
            "decorators": [],
            "name": "ResultIsString18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1051,
            "end": 1071,
            "argument": {
              "type": "BinaryExpression",
              "start": 1059,
              "end": 1070,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1059,
                "end": 1063,
                "raw": "null",
                "value": null
              },
              "right": {
                "type": "Literal",
                "start": 1066,
                "end": 1070,
                "raw": "null",
                "value": null
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1077,
            "end": 1093,
            "decorators": [],
            "name": "ResultIsString19",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1096,
            "end": 1126,
            "argument": {
              "type": "BinaryExpression",
              "start": 1104,
              "end": 1125,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1104,
                "end": 1113,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1116,
                "end": 1125,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1163,
            "end": 1179,
            "decorators": [],
            "name": "ResultIsString20",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1182,
            "end": 1199,
            "argument": {
              "type": "UnaryExpression",
              "start": 1189,
              "end": 1199,
              "argument": {
                "type": "Identifier",
                "start": 1196,
                "end": 1199,
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1205,
            "end": 1221,
            "decorators": [],
            "name": "ResultIsString21",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1224,
            "end": 1257,
            "argument": {
              "type": "UnaryExpression",
              "start": 1231,
              "end": 1257,
              "argument": {
                "type": "UnaryExpression",
                "start": 1238,
                "end": 1257,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1246,
                  "end": 1256,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1246,
                    "end": 1249,
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1256,
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "operator": "typeof",
              "prefix": true
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1289,
      "end": 1300,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1289,
        "end": 1299,
        "argument": {
          "type": "Identifier",
          "start": 1296,
          "end": 1299,
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1301,
      "end": 1313,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1301,
        "end": 1312,
        "argument": {
          "type": "Identifier",
          "start": 1308,
          "end": 1312,
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1314,
      "end": 1329,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1314,
        "end": 1328,
        "argument": {
          "type": "MemberExpression",
          "start": 1321,
          "end": 1328,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1321,
            "end": 1325,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1326,
            "end": 1327,
            "raw": "0",
            "value": 0
          }
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1330,
      "end": 1347,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 1330,
        "end": 1346,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1330,
            "end": 1340,
            "argument": {
              "type": "Identifier",
              "start": 1337,
              "end": 1340,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 1342,
            "end": 1346,
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
      "start": 1348,
      "end": 1360,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1348,
        "end": 1359,
        "argument": {
          "type": "Identifier",
          "start": 1355,
          "end": 1359,
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1361,
      "end": 1375,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1361,
        "end": 1374,
        "argument": {
          "type": "MemberExpression",
          "start": 1368,
          "end": 1374,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1368,
            "end": 1372,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1373,
            "end": 1374,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1376,
      "end": 1390,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1376,
        "end": 1389,
        "argument": {
          "type": "MemberExpression",
          "start": 1383,
          "end": 1389,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1383,
            "end": 1387,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1388,
            "end": 1389,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1391,
      "end": 1402,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1391,
        "end": 1401,
        "argument": {
          "type": "MemberExpression",
          "start": 1398,
          "end": 1401,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1398,
            "end": 1399,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1400,
            "end": 1401,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "typeof",
        "prefix": true
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1436,
            "end": 1442,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1437,
              "end": 1442,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1439,
                "end": 1442
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
      "start": 1444,
      "end": 1457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1448,
          "end": 1456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1448,
            "end": 1456,
            "decorators": [],
            "name": "x",
            "optional": false,
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
      "start": 1458,
      "end": 1475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1462,
          "end": 1474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1462,
            "end": 1474,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1463,
              "end": 1474,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1465,
                "end": 1474,
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
      "type": "LabeledStatement",
      "start": 1476,
      "end": 1490,
      "body": {
        "type": "ExpressionStatement",
        "start": 1479,
        "end": 1490,
        "directive": null,
        "expression": {
          "type": "UnaryExpression",
          "start": 1479,
          "end": 1489,
          "argument": {
            "type": "Identifier",
            "start": 1486,
            "end": 1489,
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1476,
        "end": 1477,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
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
        "directive": null,
        "expression": {
          "type": "UnaryExpression",
          "start": 1494,
          "end": 1505,
          "argument": {
            "type": "Identifier",
            "start": 1501,
            "end": 1505,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1491,
        "end": 1492,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
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
        "directive": null,
        "expression": {
          "type": "UnaryExpression",
          "start": 1510,
          "end": 1520,
          "argument": {
            "type": "Identifier",
            "start": 1517,
            "end": 1520,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1507,
        "end": 1508,
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null
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
        "directive": null,
        "expression": {
          "type": "UnaryExpression",
          "start": 1525,
          "end": 1538,
          "argument": {
            "type": "MemberExpression",
            "start": 1532,
            "end": 1538,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1532,
              "end": 1536,
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1537,
              "end": 1538,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1522,
        "end": 1523,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
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
        "directive": null,
        "expression": {
          "type": "UnaryExpression",
          "start": 1543,
          "end": 1555,
          "argument": {
            "type": "MemberExpression",
            "start": 1550,
            "end": 1555,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1550,
              "end": 1551,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1552,
              "end": 1555,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1540,
        "end": 1541,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
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
        "directive": null,
        "expression": {
          "type": "UnaryExpression",
          "start": 1560,
          "end": 1570,
          "argument": {
            "type": "MemberExpression",
            "start": 1567,
            "end": 1570,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1567,
              "end": 1568,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1569,
              "end": 1570,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1557,
        "end": 1558,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
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
        "directive": null,
        "expression": {
          "type": "UnaryExpression",
          "start": 1575,
          "end": 1588,
          "argument": {
            "type": "MemberExpression",
            "start": 1582,
            "end": 1588,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1582,
              "end": 1586,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1587,
              "end": 1588,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1572,
        "end": 1573,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
