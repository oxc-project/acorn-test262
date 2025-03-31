__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 552,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 552,
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
        "end": 552,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 70,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 18,
              "end": 28,
              "name": "fieldFunc"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 70,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 34,
                    "end": 68,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 41,
                      "end": 68,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 52,
                        "end": 68,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 54,
                            "end": 66,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 54,
                              "end": 65,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 54,
                                "end": 60,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 54,
                                  "end": 58
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 59,
                                  "end": 60,
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
                                "start": 63,
                                "end": 65,
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
          },
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 126,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 79,
              "end": 90,
              "name": "fieldFunc2"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 95,
                    "end": 124,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 103,
                      "end": 123,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 112,
                          "end": 113,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "RestElement",
                          "start": 115,
                          "end": 119,
                          "argument": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 119,
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
                        "start": 121,
                        "end": 123,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
          },
          {
            "type": "PropertyDefinition",
            "start": 131,
            "end": 137,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 135,
              "end": 136,
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
            "start": 142,
            "end": 512,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 146,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 512,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 512,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 159,
                    "end": 177,
                    "expression": {
                      "type": "CallExpression",
                      "start": 159,
                      "end": 176,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 159,
                        "end": 174,
                        "object": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 164,
                          "end": 174,
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
                    "type": "VariableDeclaration",
                    "start": 186,
                    "end": 215,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 192,
                        "end": 214,
                        "id": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 196,
                          "name": "func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 199,
                          "end": 214,
                          "object": {
                            "type": "ThisExpression",
                            "start": 199,
                            "end": 203
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 204,
                            "end": 214,
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
                    "start": 224,
                    "end": 231,
                    "expression": {
                      "type": "CallExpression",
                      "start": 224,
                      "end": 230,
                      "callee": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 228,
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
                    "start": 240,
                    "end": 262,
                    "expression": {
                      "type": "NewExpression",
                      "start": 240,
                      "end": 261,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 244,
                        "end": 259,
                        "object": {
                          "type": "ThisExpression",
                          "start": 244,
                          "end": 248
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 249,
                          "end": 259,
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
                    "start": 272,
                    "end": 293,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 278,
                        "end": 292,
                        "id": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 281,
                          "name": "arr",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 284,
                          "end": 292,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 286,
                              "end": 287,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 289,
                              "end": 290,
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
                    "start": 302,
                    "end": 333,
                    "expression": {
                      "type": "CallExpression",
                      "start": 302,
                      "end": 332,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 302,
                        "end": 318,
                        "object": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 307,
                          "end": 318,
                          "name": "fieldFunc2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 319,
                          "end": 320,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 322,
                          "end": 328,
                          "argument": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 328,
                            "name": "arr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 330,
                          "end": 331,
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
                    "start": 342,
                    "end": 387,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 348,
                        "end": 386,
                        "id": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 352,
                          "end": 386,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 356,
                            "end": 372,
                            "object": {
                              "type": "ThisExpression",
                              "start": 356,
                              "end": 360
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 361,
                              "end": 372,
                              "name": "fieldFunc2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 373,
                              "end": 374,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "SpreadElement",
                              "start": 376,
                              "end": 382,
                              "argument": {
                                "type": "Identifier",
                                "start": 379,
                                "end": 382,
                                "name": "arr",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 384,
                              "end": 385,
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
                    "start": 396,
                    "end": 449,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 402,
                        "end": 448,
                        "id": {
                          "type": "Identifier",
                          "start": 402,
                          "end": 405,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 408,
                          "end": 448,
                          "tag": {
                            "type": "MemberExpression",
                            "start": 408,
                            "end": 424,
                            "object": {
                              "type": "ThisExpression",
                              "start": 408,
                              "end": 412
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 413,
                              "end": 424,
                              "name": "fieldFunc2"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 424,
                            "end": 448,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 431,
                                "end": 432,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 441,
                                "end": 442,
                                "value": 2,
                                "raw": "2"
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 424,
                                "end": 431,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 432,
                                "end": 441,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 442,
                                "end": 448,
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
                    "start": 458,
                    "end": 506,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 458,
                      "end": 505,
                      "tag": {
                        "type": "MemberExpression",
                        "start": 458,
                        "end": 488,
                        "object": {
                          "type": "CallExpression",
                          "start": 458,
                          "end": 476,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 458,
                            "end": 474,
                            "object": {
                              "type": "ThisExpression",
                              "start": 458,
                              "end": 462
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 463,
                              "end": 474,
                              "name": "getInstance",
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
                          "start": 477,
                          "end": 488,
                          "name": "fieldFunc2"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 488,
                        "end": 505,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 495,
                            "end": 496,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 502,
                            "end": 503,
                            "value": 2,
                            "raw": "2"
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 488,
                            "end": 495,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 496,
                            "end": 502,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 503,
                            "end": 505,
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
            "start": 517,
            "end": 550,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 517,
              "end": 528,
              "name": "getInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 528,
              "end": 550,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 531,
                "end": 550,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 533,
                    "end": 548,
                    "argument": {
                      "type": "NewExpression",
                      "start": 540,
                      "end": 547,
                      "callee": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
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
