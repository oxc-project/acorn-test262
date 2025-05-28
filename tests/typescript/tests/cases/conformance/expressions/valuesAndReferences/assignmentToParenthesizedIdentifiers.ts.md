__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1169,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 7,
                "end": 13
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
      "type": "ExpressionStatement",
      "start": 15,
      "end": 21,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 20,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 16,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 20,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 36,
      "expression": {
        "type": "AssignmentExpression",
        "start": 28,
        "end": 35,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 34,
          "end": 35,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 50,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 47,
          "end": 49,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 69,
      "expression": {
        "type": "AssignmentExpression",
        "start": 60,
        "end": 68,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 66,
          "end": 68,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 80,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 89,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 95,
            "end": 116,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 102,
              "end": 116,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 106,
                  "end": 115,
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 115,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 109,
                        "end": 115
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
      "type": "ExpressionStatement",
      "start": 119,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 119,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 119,
          "end": 122,
          "object": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 125,
          "end": 126,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 144,
      "expression": {
        "type": "AssignmentExpression",
        "start": 134,
        "end": 143,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 134,
          "end": 139,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 142,
          "end": 143,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 161,
      "expression": {
        "type": "AssignmentExpression",
        "start": 151,
        "end": 160,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 152,
          "end": 155,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 159,
          "end": 160,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 177,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 176,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 168,
          "end": 171,
          "object": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 174,
          "end": 176,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 198,
      "expression": {
        "type": "AssignmentExpression",
        "start": 187,
        "end": 197,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 187,
          "end": 192,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 195,
          "end": 197,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 219,
      "expression": {
        "type": "AssignmentExpression",
        "start": 208,
        "end": 218,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 209,
          "end": 212,
          "object": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 216,
          "end": 218,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 243,
      "expression": {
        "type": "AssignmentExpression",
        "start": 230,
        "end": 242,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 234,
          "end": 242,
          "properties": [
            {
              "type": "Property",
              "start": 236,
              "end": 240,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 239,
                "end": 240,
                "value": 3,
                "raw": "3"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 268,
      "expression": {
        "type": "AssignmentExpression",
        "start": 253,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 254,
          "end": 255,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 259,
          "end": 267,
          "properties": [
            {
              "type": "Property",
              "start": 261,
              "end": 265,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 262,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 264,
                "end": 265,
                "value": 3,
                "raw": "3"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 279,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 288,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 289,
        "end": 380,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 295,
            "end": 349,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 302,
              "end": 349,
              "id": {
                "type": "Identifier",
                "start": 309,
                "end": 311,
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 312,
                "end": 349,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 322,
                    "end": 343,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 329,
                      "end": 343,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 333,
                          "end": 342,
                          "id": {
                            "type": "Identifier",
                            "start": 333,
                            "end": 342,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 334,
                              "end": 342,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 336,
                                "end": 342
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExpressionStatement",
            "start": 355,
            "end": 369,
            "expression": {
              "type": "AssignmentExpression",
              "start": 355,
              "end": 368,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 355,
                "end": 357,
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 360,
                "end": 368,
                "properties": [
                  {
                    "type": "Property",
                    "start": 362,
                    "end": 366,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 363,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 365,
                      "end": 366,
                      "value": 3,
                      "raw": "3"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 398,
      "expression": {
        "type": "AssignmentExpression",
        "start": 381,
        "end": 397,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 381,
          "end": 386,
          "object": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 389,
          "end": 397,
          "properties": [
            {
              "type": "Property",
              "start": 391,
              "end": 395,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 391,
                "end": 392,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 394,
                "end": 395,
                "value": 3,
                "raw": "3"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 424,
      "expression": {
        "type": "AssignmentExpression",
        "start": 405,
        "end": 423,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 405,
          "end": 412,
          "object": {
            "type": "Identifier",
            "start": 406,
            "end": 408,
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 410,
            "end": 412,
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 415,
          "end": 423,
          "properties": [
            {
              "type": "Property",
              "start": 417,
              "end": 421,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 417,
                "end": 418,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 420,
                "end": 421,
                "value": 3,
                "raw": "3"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 431,
      "end": 450,
      "expression": {
        "type": "AssignmentExpression",
        "start": 431,
        "end": 449,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 432,
          "end": 437,
          "object": {
            "type": "Identifier",
            "start": 432,
            "end": 434,
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 437,
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 441,
          "end": 449,
          "properties": [
            {
              "type": "Property",
              "start": 443,
              "end": 447,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 443,
                "end": 444,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 446,
                "end": 447,
                "value": 3,
                "raw": "3"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 476,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 475,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 458,
          "end": 463,
          "object": {
            "type": "Identifier",
            "start": 458,
            "end": 460,
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 461,
            "end": 463,
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 466,
          "end": 475,
          "properties": [
            {
              "type": "Property",
              "start": 468,
              "end": 473,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 471,
                "end": 473,
                "value": "",
                "raw": "''"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 486,
      "end": 506,
      "expression": {
        "type": "AssignmentExpression",
        "start": 486,
        "end": 505,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 486,
          "end": 493,
          "object": {
            "type": "Identifier",
            "start": 487,
            "end": 489,
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 491,
            "end": 493,
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 496,
          "end": 505,
          "properties": [
            {
              "type": "Property",
              "start": 498,
              "end": 503,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 501,
                "end": 503,
                "value": "",
                "raw": "''"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 516,
      "end": 536,
      "expression": {
        "type": "AssignmentExpression",
        "start": 516,
        "end": 535,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 517,
          "end": 522,
          "object": {
            "type": "Identifier",
            "start": 517,
            "end": 519,
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 520,
            "end": 522,
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 526,
          "end": 535,
          "properties": [
            {
              "type": "Property",
              "start": 528,
              "end": 533,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 528,
                "end": 529,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 531,
                "end": 533,
                "value": "",
                "raw": "''"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 548,
      "end": 565,
      "id": {
        "type": "Identifier",
        "start": 557,
        "end": 559,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 562,
        "end": 565,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 566,
      "end": 579,
      "expression": {
        "type": "AssignmentExpression",
        "start": 566,
        "end": 578,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 566,
          "end": 568,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 571,
          "end": 578,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 577,
            "end": 578,
            "value": 3,
            "raw": "3"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 635,
      "end": 650,
      "expression": {
        "type": "AssignmentExpression",
        "start": 635,
        "end": 649,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 636,
          "end": 638,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 642,
          "end": 649,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 648,
            "end": 649,
            "value": 3,
            "raw": "3"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 671,
      "end": 1036,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 683,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 684,
          "end": 693,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 685,
            "end": 693,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 687,
              "end": 693
            }
          }
        },
        {
          "type": "Identifier",
          "start": 695,
          "end": 711,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 696,
            "end": 711,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 698,
              "end": 711,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 700,
                  "end": 709,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 700,
                    "end": 701,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 701,
                    "end": 709,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 703,
                      "end": 709
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 713,
        "end": 1036,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 719,
            "end": 725,
            "expression": {
              "type": "AssignmentExpression",
              "start": 719,
              "end": 724,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 719,
                "end": 720,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 723,
                "end": 724,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 730,
            "end": 738,
            "expression": {
              "type": "AssignmentExpression",
              "start": 730,
              "end": 737,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 731,
                "end": 732,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 736,
                "end": 737,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 749,
            "end": 756,
            "expression": {
              "type": "AssignmentExpression",
              "start": 749,
              "end": 755,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 749,
                "end": 750,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 753,
                "end": 755,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 770,
            "end": 779,
            "expression": {
              "type": "AssignmentExpression",
              "start": 770,
              "end": 778,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 771,
                "end": 772,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 776,
                "end": 778,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 794,
            "end": 804,
            "expression": {
              "type": "AssignmentExpression",
              "start": 794,
              "end": 803,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 794,
                "end": 799,
                "object": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 796,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 799,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 802,
                "end": 803,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 815,
            "end": 825,
            "expression": {
              "type": "AssignmentExpression",
              "start": 815,
              "end": 824,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 816,
                "end": 819,
                "object": {
                  "type": "Identifier",
                  "start": 816,
                  "end": 817,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 818,
                  "end": 819,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 823,
                "end": 824,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 836,
            "end": 847,
            "expression": {
              "type": "AssignmentExpression",
              "start": 836,
              "end": 846,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 836,
                "end": 841,
                "object": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 838,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 841,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 844,
                "end": 846,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 861,
            "end": 872,
            "expression": {
              "type": "AssignmentExpression",
              "start": 861,
              "end": 871,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 862,
                "end": 865,
                "object": {
                  "type": "Identifier",
                  "start": 862,
                  "end": 863,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 864,
                  "end": 865,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 869,
                "end": 871,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 887,
            "end": 898,
            "expression": {
              "type": "AssignmentExpression",
              "start": 887,
              "end": 897,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 887,
                "end": 893,
                "object": {
                  "type": "Identifier",
                  "start": 887,
                  "end": 888,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 889,
                  "end": 892,
                  "value": "t",
                  "raw": "'t'"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 896,
                "end": 897,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 909,
            "end": 922,
            "expression": {
              "type": "AssignmentExpression",
              "start": 909,
              "end": 921,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 909,
                "end": 917,
                "object": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 911,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 913,
                  "end": 916,
                  "value": "t",
                  "raw": "'t'"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 920,
                "end": 921,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 933,
            "end": 946,
            "expression": {
              "type": "AssignmentExpression",
              "start": 933,
              "end": 945,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 934,
                "end": 940,
                "object": {
                  "type": "Identifier",
                  "start": 934,
                  "end": 935,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 936,
                  "end": 939,
                  "value": "t",
                  "raw": "'t'"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 944,
                "end": 945,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 957,
            "end": 969,
            "expression": {
              "type": "AssignmentExpression",
              "start": 957,
              "end": 968,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 957,
                "end": 963,
                "object": {
                  "type": "Identifier",
                  "start": 957,
                  "end": 958,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 959,
                  "end": 962,
                  "value": "t",
                  "raw": "'t'"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 966,
                "end": 968,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 983,
            "end": 997,
            "expression": {
              "type": "AssignmentExpression",
              "start": 983,
              "end": 996,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 983,
                "end": 991,
                "object": {
                  "type": "Identifier",
                  "start": 984,
                  "end": 985,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 987,
                  "end": 990,
                  "value": "t",
                  "raw": "'t'"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 994,
                "end": 996,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1011,
            "end": 1025,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1011,
              "end": 1024,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1012,
                "end": 1018,
                "object": {
                  "type": "Identifier",
                  "start": 1012,
                  "end": 1013,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 1014,
                  "end": 1017,
                  "value": "t",
                  "raw": "'t'"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 1022,
                "end": 1024,
                "value": "",
                "raw": "''"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1038,
      "end": 1054,
      "id": {
        "type": "Identifier",
        "start": 1043,
        "end": 1044,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1045,
        "end": 1054,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1051,
            "end": 1052,
            "id": {
              "type": "Identifier",
              "start": 1051,
              "end": 1052,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1055,
      "end": 1069,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1055,
        "end": 1068,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1055,
          "end": 1056,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1059,
          "end": 1068,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1079,
      "end": 1095,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1079,
        "end": 1094,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1080,
          "end": 1081,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1085,
          "end": 1094,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1106,
      "end": 1118,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1112,
        "end": 1113,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1114,
        "end": 1118,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1120,
      "end": 1134,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1120,
        "end": 1133,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1120,
          "end": 1121,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1124,
          "end": 1133,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1144,
      "end": 1160,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1144,
        "end": 1159,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1145,
          "end": 1146,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1150,
          "end": 1159,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
