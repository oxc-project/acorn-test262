__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 671,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 47,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 47,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 29,
              "end": 47,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 31,
                  "end": 45,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 32,
                      "end": 41,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 33,
                        "end": 41,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 44,
                      "end": 45,
                      "typeName": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 48,
        "end": 51,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 50,
          "end": 51,
          "typeName": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 96,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 72,
                "end": 96,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 74,
                    "end": 84,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 75,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 85,
                    "end": 94,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 86,
                      "end": 94,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 152,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 116,
                "end": 152,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 118,
                    "end": 128,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 119,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 129,
                    "end": 150,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 132,
                        "end": 150,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 132,
                            "end": 138
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 141,
                            "end": 150
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 197,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 172,
                "end": 197,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 174,
                    "end": 184,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 175,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 177,
                        "end": 183
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 185,
                    "end": 195,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 186,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 187,
                      "end": 195,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 189,
                        "end": 195
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 254,
            "name": "x4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 217,
                "end": 254,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 219,
                    "end": 229,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 222,
                        "end": 228
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 230,
                    "end": 252,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 232,
                      "end": 252,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 234,
                        "end": 252,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 234,
                            "end": 240
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 243,
                            "end": 252
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 273,
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 269,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 270,
                "end": 272,
                "name": "x1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 295,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 301,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 304,
            "end": 311,
            "callee": {
              "type": "Identifier",
              "start": 304,
              "end": 307,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 308,
                "end": 310,
                "name": "x2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 354,
            "end": 361,
            "callee": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 358,
                "end": 360,
                "name": "x3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 392,
            "end": 399,
            "callee": {
              "type": "Identifier",
              "start": 392,
              "end": 395,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 396,
                "end": 398,
                "name": "x4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 496,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 456,
            "name": "param2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 459,
            "end": 496,
            "test": {
              "type": "BinaryExpression",
              "start": 459,
              "end": 478,
              "left": {
                "type": "CallExpression",
                "start": 459,
                "end": 472,
                "callee": {
                  "type": "MemberExpression",
                  "start": 459,
                  "end": 470,
                  "object": {
                    "type": "Identifier",
                    "start": 459,
                    "end": 463,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 470,
                    "name": "random",
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
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 475,
                "end": 478,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 481,
              "end": 489,
              "value": "value2",
              "raw": "'value2'"
            },
            "alternate": {
              "type": "Literal",
              "start": 492,
              "end": 496,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 569,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 568,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 508,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 511,
            "end": 568,
            "properties": [
              {
                "type": "Property",
                "start": 517,
                "end": 533,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 523,
                  "name": "param1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 525,
                  "end": 533,
                  "value": "value1",
                  "raw": "'value1'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 539,
                "end": 566,
                "argument": {
                  "type": "ConditionalExpression",
                  "start": 543,
                  "end": 565,
                  "test": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 549,
                    "name": "param2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 552,
                    "end": 560,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 553,
                        "end": 559,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 559,
                          "name": "param2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 559,
                          "name": "param2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "start": 563,
                    "end": 565,
                    "properties": []
                  }
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 571,
      "end": 670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 669,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 582,
            "name": "query",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 585,
            "end": 669,
            "callee": {
              "type": "MemberExpression",
              "start": 585,
              "end": 664,
              "object": {
                "type": "CallExpression",
                "start": 585,
                "end": 659,
                "callee": {
                  "type": "MemberExpression",
                  "start": 585,
                  "end": 608,
                  "object": {
                    "type": "CallExpression",
                    "start": 585,
                    "end": 604,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 585,
                      "end": 599,
                      "object": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 591,
                        "name": "Object",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 599,
                        "name": "entries",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 603,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 608,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 614,
                    "end": 657,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "ArrayPattern",
                        "start": 615,
                        "end": 621,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 616,
                            "end": 617,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 619,
                            "end": 620,
                            "name": "v",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "body": {
                      "type": "TemplateLiteral",
                      "start": 626,
                      "end": 657,
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 629,
                          "end": 630,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "CallExpression",
                          "start": 634,
                          "end": 655,
                          "callee": {
                            "type": "Identifier",
                            "start": 634,
                            "end": 652,
                            "name": "encodeURIComponent",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 653,
                              "end": 654,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 626,
                          "end": 629,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 630,
                          "end": 634,
                          "value": {
                            "cooked": "=",
                            "raw": "="
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 655,
                          "end": 657,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 660,
                "end": 664,
                "name": "join",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 665,
                "end": 668,
                "value": "&",
                "raw": "'&'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
