__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 104,
  "end": 1252,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 104,
      "end": 233,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 124,
        "end": 233,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 216,
            "end": 231,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 216,
              "end": 230,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 216,
                "end": 225,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 216,
                  "end": 220
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 225,
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ObjectExpression",
                "start": 228,
                "end": 230,
                "properties": []
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "decorators": [],
        "name": "Multimap",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 233,
      "end": 234
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 399,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 236,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 236,
          "end": 254,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 244,
            "decorators": [],
            "name": "Multimap",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 254,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 257,
          "end": 399,
          "properties": [
            {
              "type": "Property",
              "start": 345,
              "end": 397,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 345,
                "end": 348,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 348,
                "end": 397,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 354,
                  "end": 397,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 364,
                      "end": 391,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 371,
                        "end": 390,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 371,
                          "end": 380,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 371,
                            "end": 375
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 376,
                            "end": 380,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "BinaryExpression",
                          "start": 381,
                          "end": 389,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 381,
                            "end": 384,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 387,
                            "end": 389,
                            "raw": "''",
                            "value": ""
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 349,
                    "end": 352,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 500,
      "end": 637,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 636,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 513,
            "decorators": [],
            "name": "Multimap2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 516,
            "end": 636,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 527,
              "end": 636,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 619,
                  "end": 634,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 619,
                    "end": 633,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 619,
                      "end": 628,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 619,
                        "end": 623
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 628,
                        "decorators": [],
                        "name": "_map",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 631,
                      "end": 633,
                      "properties": []
                    }
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
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 639,
      "end": 813,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 639,
        "end": 813,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 639,
          "end": 658,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 639,
            "end": 648,
            "decorators": [],
            "name": "Multimap2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 649,
            "end": 658,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 661,
          "end": 813,
          "properties": [
            {
              "type": "Property",
              "start": 749,
              "end": 811,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 749,
                "end": 752,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 754,
                "end": 811,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 768,
                  "end": 811,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 778,
                      "end": 805,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 785,
                        "end": 804,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 785,
                          "end": 794,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 785,
                            "end": 789
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 790,
                            "end": 794,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "BinaryExpression",
                          "start": 795,
                          "end": 803,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 795,
                            "end": 798,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 801,
                            "end": 803,
                            "raw": "''",
                            "value": ""
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 763,
                    "end": 766,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 827,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 826,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 821,
            "decorators": [],
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 824,
            "end": 826,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 946,
      "end": 1082,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 946,
        "end": 1081,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 946,
          "end": 958,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 946,
            "end": 948,
            "decorators": [],
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 949,
            "end": 958,
            "decorators": [],
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 961,
          "end": 1081,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 972,
            "end": 1081,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1064,
                "end": 1079,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1064,
                  "end": 1078,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1064,
                    "end": 1073,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 1064,
                      "end": 1068
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1069,
                      "end": 1073,
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 1076,
                    "end": 1078,
                    "properties": []
                  }
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1084,
      "end": 1251,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1084,
        "end": 1251,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1084,
          "end": 1106,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1084,
            "end": 1096,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1084,
              "end": 1086,
              "decorators": [],
              "name": "Ns",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1087,
              "end": 1096,
              "decorators": [],
              "name": "Multimap3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1097,
            "end": 1106,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1109,
          "end": 1251,
          "properties": [
            {
              "type": "Property",
              "start": 1197,
              "end": 1249,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1197,
                "end": 1200,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1200,
                "end": 1249,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1206,
                  "end": 1249,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1216,
                      "end": 1243,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1223,
                        "end": 1242,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1223,
                          "end": 1232,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1223,
                            "end": 1227
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1228,
                            "end": 1232,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "BinaryExpression",
                          "start": 1233,
                          "end": 1241,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 1233,
                            "end": 1236,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1239,
                            "end": 1241,
                            "raw": "''",
                            "value": ""
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1201,
                    "end": 1204,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
