__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 534,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 533,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 533,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 63,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 31,
              "name": "fieldFunc"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 62,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 111,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 75,
              "end": 86,
              "name": "fieldFunc2"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 110,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 102,
                  "end": 106,
                  "argument": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 110,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 122,
            "static": false,
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
              "start": 120,
              "end": 121,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 502,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 131,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 131,
              "end": 502,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 146,
                          "end": 156,
                          "name": "fieldFunc"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 170,
                            "end": 180,
                            "name": "fieldFunc"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": true,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 194,
                    "end": 220,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 200,
                        "end": 219,
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 204,
                          "name": "func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 207,
                          "end": 219,
                          "object": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 208,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 209,
                            "end": 219,
                            "name": "fieldFunc"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
                        "name": "func",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 251,
                          "end": 261,
                          "name": "fieldFunc"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 274,
                    "end": 295,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 280,
                        "end": 294,
                        "id": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 283,
                          "name": "arr",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 306,
                          "end": 317,
                          "name": "fieldFunc2"
                        },
                        "computed": false,
                        "optional": false
                      },
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
                            "name": "arr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 341,
                    "end": 383,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 347,
                        "end": 382,
                        "id": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 348,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 357,
                              "end": 368,
                              "name": "fieldFunc2"
                            },
                            "computed": false,
                            "optional": false
                          },
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
                                "name": "arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 380,
                              "end": 381,
                              "value": 3,
                              "raw": "3"
                            }
                          ],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 392,
                    "end": 442,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 398,
                        "end": 441,
                        "id": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 401,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 406,
                              "end": 417,
                              "name": "fieldFunc2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 417,
                            "end": 441,
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
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 417,
                                "end": 424,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 425,
                                "end": 434,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 435,
                                "end": 441,
                                "value": {
                                  "cooked": "tail",
                                  "raw": "tail"
                                },
                                "tail": true
                              }
                            ]
                          },
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
                              "name": "getClass",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 467,
                          "end": 478,
                          "name": "fieldFunc2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 478,
                        "end": 495,
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
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 478,
                            "end": 485,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 486,
                            "end": 492,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 493,
                            "end": 495,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ]
                      },
                      "typeArguments": null
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 507,
            "end": 531,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 507,
              "end": 515,
              "name": "getClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 515,
              "end": 531,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "A",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
