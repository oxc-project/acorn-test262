__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 104,
  "end": 1175,
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
      "start": 302,
      "end": 377,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 302,
        "end": 377,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 302,
          "end": 324,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 302,
            "end": 320,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 302,
              "end": 310,
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 311,
              "end": 320,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 321,
            "end": 324,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 327,
          "end": 377,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 342,
            "end": 377,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 348,
                "end": 375,
                "argument": {
                  "type": "MemberExpression",
                  "start": 355,
                  "end": 374,
                  "computed": true,
                  "object": {
                    "type": "MemberExpression",
                    "start": 355,
                    "end": 364,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 355,
                      "end": 359
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 364,
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "BinaryExpression",
                    "start": 365,
                    "end": 373,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 365,
                      "end": 368,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 371,
                      "end": 373,
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
              "start": 337,
              "end": 340,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 614,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 491,
            "decorators": [],
            "name": "Multimap2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 494,
            "end": 614,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 505,
              "end": 614,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 597,
                  "end": 612,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 597,
                    "end": 611,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 597,
                      "end": 606,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 597,
                        "end": 601
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 602,
                        "end": 606,
                        "decorators": [],
                        "name": "_map",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 609,
                      "end": 611,
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
      "start": 683,
      "end": 759,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 683,
        "end": 759,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 683,
          "end": 706,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 683,
            "end": 702,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 683,
              "end": 692,
              "decorators": [],
              "name": "Multimap2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 693,
              "end": 702,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 703,
            "end": 706,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 709,
          "end": 759,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 724,
            "end": 759,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 730,
                "end": 757,
                "argument": {
                  "type": "MemberExpression",
                  "start": 737,
                  "end": 756,
                  "computed": true,
                  "object": {
                    "type": "MemberExpression",
                    "start": 737,
                    "end": 746,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 737,
                      "end": 741
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 742,
                      "end": 746,
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "BinaryExpression",
                    "start": 747,
                    "end": 755,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 750,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 753,
                      "end": 755,
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
              "start": 719,
              "end": 722,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 761,
      "end": 773,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 765,
          "end": 772,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 765,
            "end": 767,
            "decorators": [],
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 770,
            "end": 772,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 892,
      "end": 1028,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 892,
        "end": 1027,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 892,
          "end": 904,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 892,
            "end": 894,
            "decorators": [],
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 895,
            "end": 904,
            "decorators": [],
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 907,
          "end": 1027,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 918,
            "end": 1027,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1010,
                "end": 1025,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 1010,
                  "end": 1024,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1010,
                    "end": 1019,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 1010,
                      "end": 1014
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1015,
                      "end": 1019,
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 1022,
                    "end": 1024,
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
      "start": 1096,
      "end": 1175,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1096,
        "end": 1175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1096,
          "end": 1122,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1096,
            "end": 1118,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 1096,
              "end": 1108,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1096,
                "end": 1098,
                "decorators": [],
                "name": "Ns",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1099,
                "end": 1108,
                "decorators": [],
                "name": "Multimap3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1109,
              "end": 1118,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1119,
            "end": 1122,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1125,
          "end": 1175,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1140,
            "end": 1175,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1146,
                "end": 1173,
                "argument": {
                  "type": "MemberExpression",
                  "start": 1153,
                  "end": 1172,
                  "computed": true,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1153,
                    "end": 1162,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 1153,
                      "end": 1157
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1158,
                      "end": 1162,
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "BinaryExpression",
                    "start": 1163,
                    "end": 1171,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 1163,
                      "end": 1166,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1169,
                      "end": 1171,
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
              "start": 1135,
              "end": 1138,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
