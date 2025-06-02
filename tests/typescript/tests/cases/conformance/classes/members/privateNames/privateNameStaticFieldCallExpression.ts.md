__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 533,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 533,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
        "start": 8,
        "end": 533,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 63,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 31,
              "name": "fieldFunc"
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 62,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 62,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 48,
                    "end": 60,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 48,
                      "end": 59,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 48,
                        "end": 54,
                        "object": {
                          "type": "ThisExpression",
                          "start": 48,
                          "end": 52
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 57,
                        "end": 59,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 111,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 75,
              "end": 86,
              "name": "fieldFunc2"
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 110,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 102,
                  "end": 106,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 110,
                "body": []
              },
              "expression": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 122,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 120,
              "end": 121,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 502,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 131,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 131,
              "end": 502,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 502,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 144,
                    "end": 159,
                    "expression": {
                      "type": "CallExpression",
                      "start": 144,
                      "end": 158,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 144,
                        "end": 156,
                        "object": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 145,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 146,
                          "end": 156,
                          "name": "fieldFunc"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 168,
                    "end": 185,
                    "expression": {
                      "type": "ChainExpression",
                      "start": 168,
                      "end": 184,
                      "expression": {
                        "type": "CallExpression",
                        "start": 168,
                        "end": 184,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 168,
                          "end": 180,
                          "object": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 169,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 170,
                            "end": 180,
                            "name": "fieldFunc"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 194,
                    "end": 220,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 200,
                        "end": 219,
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 204,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 207,
                          "end": 219,
                          "object": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 208,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 209,
                            "end": 219,
                            "name": "fieldFunc"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 229,
                    "end": 236,
                    "expression": {
                      "type": "CallExpression",
                      "start": 229,
                      "end": 235,
                      "callee": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 233,
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 245,
                    "end": 264,
                    "expression": {
                      "type": "NewExpression",
                      "start": 245,
                      "end": 263,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 249,
                        "end": 261,
                        "object": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 251,
                          "end": 261,
                          "name": "fieldFunc"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 274,
                    "end": 295,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 280,
                        "end": 294,
                        "id": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 283,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 286,
                          "end": 294,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 288,
                              "end": 289,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 291,
                              "end": 292,
                              "value": 2,
                              "raw": "2"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 304,
                    "end": 332,
                    "expression": {
                      "type": "CallExpression",
                      "start": 304,
                      "end": 331,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 317,
                        "object": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 305,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 306,
                          "end": 317,
                          "name": "fieldFunc2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 318,
                          "end": 319,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 321,
                          "end": 327,
                          "argument": {
                            "type": "Identifier",
                            "start": 324,
                            "end": 327,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 329,
                          "end": 330,
                          "value": 3,
                          "raw": "3"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 341,
                    "end": 383,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 347,
                        "end": 382,
                        "id": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 348,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 351,
                          "end": 382,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 355,
                            "end": 368,
                            "object": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 356,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 357,
                              "end": 368,
                              "name": "fieldFunc2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 369,
                              "end": 370,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "SpreadElement",
                              "start": 372,
                              "end": 378,
                              "argument": {
                                "type": "Identifier",
                                "start": 375,
                                "end": 378,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 380,
                              "end": 381,
                              "value": 3,
                              "raw": "3"
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
                    "start": 392,
                    "end": 442,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 398,
                        "end": 441,
                        "id": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 401,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 404,
                          "end": 441,
                          "tag": {
                            "type": "MemberExpression",
                            "start": 404,
                            "end": 417,
                            "object": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 405,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 406,
                              "end": 417,
                              "name": "fieldFunc2"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 417,
                            "end": 441,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 417,
                                "end": 424,
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 425,
                                "end": 434,
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 435,
                                "end": 441,
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 424,
                                "end": 425,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 434,
                                "end": 435,
                                "value": 2,
                                "raw": "2"
                              }
                            ]
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 451,
                    "end": 496,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 451,
                      "end": 495,
                      "tag": {
                        "type": "MemberExpression",
                        "start": 451,
                        "end": 478,
                        "object": {
                          "type": "CallExpression",
                          "start": 451,
                          "end": 466,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 451,
                            "end": 464,
                            "object": {
                              "type": "ThisExpression",
                              "start": 451,
                              "end": 455
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 456,
                              "end": 464,
                              "decorators": [],
                              "name": "getClass",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 467,
                          "end": 478,
                          "name": "fieldFunc2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 478,
                        "end": 495,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 478,
                            "end": 485,
                            "value": {
                              "raw": "test",
                              "cooked": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 486,
                            "end": 492,
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 493,
                            "end": 495,
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 485,
                            "end": 486,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 492,
                            "end": 493,
                            "value": 2,
                            "raw": "2"
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 507,
            "end": 531,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 507,
              "end": 515,
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 515,
              "end": 531,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 518,
                "end": 531,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 520,
                    "end": 529,
                    "argument": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 528,
                      "decorators": [],
                      "name": "A",
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
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
