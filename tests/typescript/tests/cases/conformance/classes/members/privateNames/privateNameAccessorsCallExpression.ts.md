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
        "end": 552,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 70,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 18,
              "end": 28,
              "name": "fieldFunc"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 70,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                      "expression": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 126,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 79,
              "end": 90,
              "name": "fieldFunc2"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 126,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 112,
                          "end": 113,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "RestElement",
                          "start": 115,
                          "end": 119,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 119,
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
                        "start": 121,
                        "end": 123,
                        "body": []
                      },
                      "expression": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 131,
            "end": 137,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 135,
              "end": 136,
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
            "start": 142,
            "end": 512,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 146,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 512,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                    "type": "VariableDeclaration",
                    "start": 186,
                    "end": 215,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 192,
                        "end": 214,
                        "id": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 196,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
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
                    "start": 272,
                    "end": 293,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 278,
                        "end": 292,
                        "id": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 281,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
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
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 342,
                    "end": 387,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 348,
                        "end": 386,
                        "id": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
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
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
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
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 384,
                              "end": 385,
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
                    "start": 396,
                    "end": 449,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 402,
                        "end": 448,
                        "id": {
                          "type": "Identifier",
                          "start": 402,
                          "end": 405,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
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
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 424,
                            "end": 448,
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
                            ],
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
                              "decorators": [],
                              "name": "getInstance",
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
                          "start": 477,
                          "end": 488,
                          "name": "fieldFunc2"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 488,
                        "end": 505,
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
                        ],
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
            "start": 517,
            "end": 550,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 517,
              "end": 528,
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 528,
              "end": 550,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
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
