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
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "decorators": [],
        "name": "Multimap",
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
        "start": 124,
        "end": 233,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 216,
            "end": 231,
            "expression": {
              "type": "AssignmentExpression",
              "start": 216,
              "end": 230,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 216,
                "end": 225,
                "object": {
                  "type": "ThisExpression",
                  "start": 216,
                  "end": 220
                },
                "property": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 225,
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 228,
                "end": 230,
                "properties": []
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
      "expression": {
        "type": "AssignmentExpression",
        "start": 236,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 236,
          "end": 254,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 244,
            "decorators": [],
            "name": "Multimap",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 254,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 345,
                "end": 348,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 348,
                "end": 397,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 371,
                          "end": 380,
                          "object": {
                            "type": "ThisExpression",
                            "start": 371,
                            "end": 375
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 376,
                            "end": 380,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "start": 381,
                          "end": 389,
                          "left": {
                            "type": "Identifier",
                            "start": 381,
                            "end": 384,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 387,
                            "end": 389,
                            "value": "",
                            "raw": "''"
                          }
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": true,
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
      "type": "VariableDeclaration",
      "start": 500,
      "end": 637,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 636,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 527,
              "end": 636,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 619,
                  "end": 634,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 619,
                    "end": 633,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 619,
                      "end": 628,
                      "object": {
                        "type": "ThisExpression",
                        "start": 619,
                        "end": 623
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 628,
                        "decorators": [],
                        "name": "_map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 631,
                      "end": 633,
                      "properties": []
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 639,
      "end": 813,
      "expression": {
        "type": "AssignmentExpression",
        "start": 639,
        "end": 813,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 639,
          "end": 658,
          "object": {
            "type": "Identifier",
            "start": 639,
            "end": 648,
            "decorators": [],
            "name": "Multimap2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 649,
            "end": 658,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 749,
                "end": 752,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 754,
                "end": 811,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 785,
                          "end": 794,
                          "object": {
                            "type": "ThisExpression",
                            "start": 785,
                            "end": 789
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 790,
                            "end": 794,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "start": 795,
                          "end": 803,
                          "left": {
                            "type": "Identifier",
                            "start": 795,
                            "end": 798,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 801,
                            "end": 803,
                            "value": "",
                            "raw": "''"
                          }
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  ]
                },
                "expression": false
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
      "type": "VariableDeclaration",
      "start": 815,
      "end": 827,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 826,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 946,
      "end": 1082,
      "expression": {
        "type": "AssignmentExpression",
        "start": 946,
        "end": 1081,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 946,
          "end": 958,
          "object": {
            "type": "Identifier",
            "start": 946,
            "end": 948,
            "decorators": [],
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 949,
            "end": 958,
            "decorators": [],
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 961,
          "end": 1081,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 972,
            "end": 1081,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1064,
                "end": 1079,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1064,
                  "end": 1078,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1064,
                    "end": 1073,
                    "object": {
                      "type": "ThisExpression",
                      "start": 1064,
                      "end": 1068
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1069,
                      "end": 1073,
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 1076,
                    "end": 1078,
                    "properties": []
                  }
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1084,
      "end": 1251,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1084,
        "end": 1251,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1084,
          "end": 1106,
          "object": {
            "type": "MemberExpression",
            "start": 1084,
            "end": 1096,
            "object": {
              "type": "Identifier",
              "start": 1084,
              "end": 1086,
              "decorators": [],
              "name": "Ns",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1087,
              "end": 1096,
              "decorators": [],
              "name": "Multimap3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1097,
            "end": 1106,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1197,
                "end": 1200,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1200,
                "end": 1249,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 1223,
                          "end": 1232,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1223,
                            "end": 1227
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1228,
                            "end": 1232,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "start": 1233,
                          "end": 1241,
                          "left": {
                            "type": "Identifier",
                            "start": 1233,
                            "end": 1236,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 1239,
                            "end": 1241,
                            "value": "",
                            "raw": "''"
                          }
                        },
                        "optional": false,
                        "computed": true
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
