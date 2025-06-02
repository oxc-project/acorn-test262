__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 670,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 47,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 33,
                        "end": 41,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        }
                      }
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 97,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 96,
            "decorators": [],
            "name": "x1",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 153,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 152,
            "decorators": [],
            "name": "x2",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 198,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 197,
            "decorators": [],
            "name": "x3",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 255,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 254,
            "decorators": [],
            "name": "x4",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 274,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 273,
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 269,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 270,
                "end": 272,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 295,
      "end": 312,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 301,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 304,
            "end": 311,
            "callee": {
              "type": "Identifier",
              "start": 304,
              "end": 307,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 308,
                "end": 310,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 362,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 354,
            "end": 361,
            "callee": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 358,
                "end": 360,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 400,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 392,
            "end": 399,
            "callee": {
              "type": "Identifier",
              "start": 392,
              "end": 395,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 396,
                "end": 398,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 497,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 496,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 456,
            "decorators": [],
            "name": "param2",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 470,
                    "decorators": [],
                    "name": "random",
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 569,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 568,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 508,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 523,
                  "decorators": [],
                  "name": "param1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 525,
                  "end": 533,
                  "value": "value1",
                  "raw": "'value1'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
                    "decorators": [],
                    "name": "param2",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 559,
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 559,
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 571,
      "end": 670,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 669,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 582,
            "decorators": [],
            "name": "query",
            "optional": false,
            "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 599,
                        "decorators": [],
                        "name": "entries",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 603,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 608,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 614,
                    "end": 657,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "ArrayPattern",
                        "start": 615,
                        "end": 621,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 616,
                            "end": 617,
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 619,
                            "end": 620,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TemplateLiteral",
                      "start": 626,
                      "end": 657,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 626,
                          "end": 629,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 630,
                          "end": 634,
                          "value": {
                            "raw": "=",
                            "cooked": "="
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 655,
                          "end": 657,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 629,
                          "end": 630,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "CallExpression",
                          "start": 634,
                          "end": 655,
                          "callee": {
                            "type": "Identifier",
                            "start": 634,
                            "end": 652,
                            "decorators": [],
                            "name": "encodeURIComponent",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 653,
                              "end": 654,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 660,
                "end": 664,
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 665,
                "end": 668,
                "value": "&",
                "raw": "'&'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
