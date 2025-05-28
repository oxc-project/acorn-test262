__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 185,
  "end": 969,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 185,
      "end": 301,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 192,
        "end": 301,
        "id": {
          "type": "Identifier",
          "start": 201,
          "end": 214,
          "decorators": [],
          "name": "prepareConfig",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 215,
            "end": 275,
            "decorators": [],
            "left": {
              "type": "ObjectPattern",
              "start": 215,
              "end": 270,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 221,
                  "end": 268,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 236,
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 238,
                    "end": 268,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 238,
                      "end": 263,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 248,
                          "end": 257,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 252,
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 248,
                            "end": 257,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 248,
                              "end": 252,
                              "decorators": [],
                              "name": "json",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "start": 255,
                              "end": 257,
                              "elements": []
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 266,
                      "end": 268,
                      "properties": []
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 273,
              "end": 275,
              "properties": []
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 277,
          "end": 301,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 283,
              "end": 287,
              "expression": {
                "type": "Identifier",
                "start": 283,
                "end": 287,
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 303,
      "end": 424,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 310,
        "end": 424,
        "id": {
          "type": "Identifier",
          "start": 319,
          "end": 349,
          "decorators": [],
          "name": "prepareConfigWithoutAnnotation",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 350,
            "end": 410,
            "decorators": [],
            "left": {
              "type": "ObjectPattern",
              "start": 350,
              "end": 405,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 356,
                  "end": 403,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 371,
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 373,
                    "end": 403,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 373,
                      "end": 398,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 383,
                          "end": 392,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 383,
                            "end": 387,
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 383,
                            "end": 392,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 383,
                              "end": 387,
                              "decorators": [],
                              "name": "json",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "start": 390,
                              "end": 392,
                              "elements": []
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 401,
                      "end": 403,
                      "properties": []
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 408,
              "end": 410,
              "properties": []
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 412,
          "end": 424,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 418,
              "end": 422,
              "expression": {
                "type": "Identifier",
                "start": 418,
                "end": 422,
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 537,
      "end": 679,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 544,
        "end": 679,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 550,
            "end": 679,
            "id": {
              "type": "Identifier",
              "start": 550,
              "end": 586,
              "decorators": [],
              "name": "prepareConfigWithContextualSignature",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 589,
              "end": 679,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 590,
                  "end": 650,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 590,
                    "end": 645,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 596,
                        "end": 643,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 596,
                          "end": 611,
                          "decorators": [],
                          "name": "additionalFiles",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 613,
                          "end": 643,
                          "decorators": [],
                          "left": {
                            "type": "ObjectPattern",
                            "start": 613,
                            "end": 638,
                            "decorators": [],
                            "properties": [
                              {
                                "type": "Property",
                                "start": 623,
                                "end": 632,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 623,
                                  "end": 627,
                                  "decorators": [],
                                  "name": "json",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "AssignmentPattern",
                                  "start": 623,
                                  "end": 632,
                                  "decorators": [],
                                  "left": {
                                    "type": "Identifier",
                                    "start": 623,
                                    "end": 627,
                                    "decorators": [],
                                    "name": "json",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "ArrayExpression",
                                    "start": 630,
                                    "end": 632,
                                    "elements": []
                                  },
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 641,
                            "end": 643,
                            "properties": []
                          },
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 648,
                    "end": 650,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 655,
                "end": 679,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 661,
                    "end": 665,
                    "expression": {
                      "type": "Identifier",
                      "start": 661,
                      "end": 665,
                      "decorators": [],
                      "name": "json",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 817,
      "end": 876,
      "id": {
        "type": "Identifier",
        "start": 826,
        "end": 828,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 829,
          "end": 859,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 829,
            "end": 854,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 831,
                "end": 852,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 834,
                  "end": 852,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 834,
                    "end": 847,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 836,
                        "end": 845,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 836,
                          "end": 840,
                          "decorators": [],
                          "name": "json",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 836,
                          "end": 845,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 836,
                            "end": 840,
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 843,
                            "end": 845,
                            "elements": []
                          },
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 850,
                    "end": 852,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 857,
            "end": 859,
            "properties": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 861,
        "end": 876,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 863,
            "end": 874,
            "argument": {
              "type": "Identifier",
              "start": 870,
              "end": 874,
              "decorators": [],
              "name": "json",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 917,
      "end": 969,
      "id": {
        "type": "Identifier",
        "start": 926,
        "end": 928,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 929,
          "end": 952,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 929,
            "end": 947,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 930,
                "end": 946,
                "decorators": [],
                "left": {
                  "type": "ArrayPattern",
                  "start": 930,
                  "end": 941,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 931,
                      "end": 940,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 931,
                        "end": 935,
                        "decorators": [],
                        "name": "json",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 938,
                        "end": 940,
                        "elements": []
                      },
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 944,
                  "end": 946,
                  "elements": []
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 950,
            "end": 952,
            "elements": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 954,
        "end": 969,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 956,
            "end": 967,
            "argument": {
              "type": "Identifier",
              "start": 963,
              "end": 967,
              "decorators": [],
              "name": "json",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
