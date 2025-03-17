__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 5457,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 4315,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 37,
        "name": "c1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 4315,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 84,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 201,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 135,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 201,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 155,
                  "end": 164,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 201,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 176,
                    "end": 195,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 183,
                      "end": 194,
                      "left": {
                        "type": "MemberExpression",
                        "start": 183,
                        "end": 190,
                        "object": {
                          "type": "ThisExpression",
                          "start": 183,
                          "end": 187
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 190,
                          "name": "p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 264,
            "end": 320,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 275,
              "end": 277,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 277,
              "end": 320,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 280,
                "end": 320,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 314,
                    "argument": {
                      "type": "CallExpression",
                      "start": 297,
                      "end": 313,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 297,
                        "end": 304,
                        "object": {
                          "type": "ThisExpression",
                          "start": 297,
                          "end": 301
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 304,
                          "name": "p2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 305,
                          "end": 312,
                          "object": {
                            "type": "ThisExpression",
                            "start": 305,
                            "end": 309
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 310,
                            "end": 312,
                            "name": "p1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 466,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 390,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 390,
              "end": 466,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 410,
                  "end": 423,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 425,
                "end": 466,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 435,
                    "end": 460,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 435,
                      "end": 459,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 435,
                        "end": 442,
                        "object": {
                          "type": "ThisExpression",
                          "start": 435,
                          "end": 439
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 442,
                          "name": "p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 445,
                        "end": 459,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 445,
                          "end": 452,
                          "object": {
                            "type": "ThisExpression",
                            "start": 445,
                            "end": 449
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 450,
                            "end": 452,
                            "name": "p2",
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
                            "start": 453,
                            "end": 458,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 529,
            "end": 549,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 537,
              "end": 540,
              "name": "pp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 540,
              "end": 548,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 542,
                "end": 548
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 582,
            "end": 659,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 590,
              "end": 593,
              "name": "pp2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 593,
              "end": 659,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 613,
                  "end": 622,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 614,
                    "end": 622,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 616,
                      "end": 622
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 624,
                "end": 659,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 634,
                    "end": 653,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 641,
                      "end": 652,
                      "left": {
                        "type": "MemberExpression",
                        "start": 641,
                        "end": 648,
                        "object": {
                          "type": "ThisExpression",
                          "start": 641,
                          "end": 645
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 646,
                          "end": 648,
                          "name": "p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 652,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 720,
            "end": 780,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 732,
              "end": 735,
              "name": "pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 735,
              "end": 780,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 738,
                "end": 780,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 748,
                    "end": 774,
                    "argument": {
                      "type": "CallExpression",
                      "start": 755,
                      "end": 773,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 755,
                        "end": 763,
                        "object": {
                          "type": "ThisExpression",
                          "start": 755,
                          "end": 759
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 760,
                          "end": 763,
                          "name": "pp2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 764,
                          "end": 772,
                          "object": {
                            "type": "ThisExpression",
                            "start": 764,
                            "end": 768
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 769,
                            "end": 772,
                            "name": "pp1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 811,
            "end": 905,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 823,
              "end": 826,
              "name": "pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 826,
              "end": 905,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 847,
                  "end": 860,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 852,
                    "end": 860,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 854,
                      "end": 860
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 862,
                "end": 905,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 872,
                    "end": 899,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 872,
                      "end": 898,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 872,
                        "end": 880,
                        "object": {
                          "type": "ThisExpression",
                          "start": 872,
                          "end": 876
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 877,
                          "end": 880,
                          "name": "pp1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 883,
                        "end": 898,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 883,
                          "end": 891,
                          "object": {
                            "type": "ThisExpression",
                            "start": 883,
                            "end": 887
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 888,
                            "end": 891,
                            "name": "pp2",
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
                            "start": 892,
                            "end": 897,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 939,
            "end": 960,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 939,
              "end": 950,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 950,
              "end": 960,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 953,
                "end": 960,
                "body": []
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
            "start": 1003,
            "end": 1021,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1010,
              "end": 1012,
              "name": "s1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1012,
              "end": 1020,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1014,
                "end": 1020
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1061,
            "end": 1134,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1068,
              "end": 1070,
              "name": "s2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1070,
              "end": 1134,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1090,
                  "end": 1099,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1091,
                    "end": 1099,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1093,
                      "end": 1099
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1101,
                "end": 1134,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1111,
                    "end": 1128,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1118,
                      "end": 1127,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1118,
                        "end": 1123,
                        "object": {
                          "type": "Identifier",
                          "start": 1118,
                          "end": 1120,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1121,
                          "end": 1123,
                          "name": "s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1126,
                        "end": 1127,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "start": 1172,
            "end": 1224,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1183,
              "end": 1185,
              "name": "s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1185,
              "end": 1224,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1188,
                "end": 1224,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1198,
                    "end": 1218,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1205,
                      "end": 1217,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1205,
                        "end": 1210,
                        "object": {
                          "type": "Identifier",
                          "start": 1205,
                          "end": 1207,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1208,
                          "end": 1210,
                          "name": "s2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1211,
                          "end": 1216,
                          "object": {
                            "type": "Identifier",
                            "start": 1211,
                            "end": 1213,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1214,
                            "end": 1216,
                            "name": "s1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
          },
          {
            "type": "MethodDefinition",
            "start": 1285,
            "end": 1371,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1296,
              "end": 1298,
              "name": "s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1298,
              "end": 1371,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1319,
                  "end": 1332,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1324,
                    "end": 1332,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1326,
                      "end": 1332
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1334,
                "end": 1371,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1344,
                    "end": 1365,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1344,
                      "end": 1364,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1344,
                        "end": 1349,
                        "object": {
                          "type": "Identifier",
                          "start": 1344,
                          "end": 1346,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1347,
                          "end": 1349,
                          "name": "s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 1352,
                        "end": 1364,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1352,
                          "end": 1357,
                          "object": {
                            "type": "Identifier",
                            "start": 1352,
                            "end": 1354,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1355,
                            "end": 1357,
                            "name": "s2",
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
                            "start": 1358,
                            "end": 1363,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1410,
            "end": 1431,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1417,
              "end": 1422,
              "name": "nc_p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1422,
              "end": 1430,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1424,
                "end": 1430
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 1436,
            "end": 1498,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1443,
              "end": 1448,
              "name": "nc_p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1448,
              "end": 1498,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1449,
                  "end": 1458,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1450,
                    "end": 1458,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1452,
                      "end": 1458
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1460,
                "end": 1498,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1470,
                    "end": 1492,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1477,
                      "end": 1491,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1477,
                        "end": 1487,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1477,
                          "end": 1481
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1482,
                          "end": 1487,
                          "name": "nc_p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1490,
                        "end": 1491,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 1503,
            "end": 1568,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1514,
              "end": 1519,
              "name": "nc_p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1519,
              "end": 1568,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1522,
                "end": 1568,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1532,
                    "end": 1562,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1539,
                      "end": 1561,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1539,
                        "end": 1549,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1539,
                          "end": 1543
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1544,
                          "end": 1549,
                          "name": "nc_p2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1550,
                          "end": 1560,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1550,
                            "end": 1554
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1555,
                            "end": 1560,
                            "name": "nc_p1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 1573,
            "end": 1652,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1584,
              "end": 1589,
              "name": "nc_p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1589,
              "end": 1652,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1590,
                  "end": 1603,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1595,
                    "end": 1603,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1597,
                      "end": 1603
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1605,
                "end": 1652,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1615,
                    "end": 1646,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1615,
                      "end": 1645,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1615,
                        "end": 1625,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1615,
                          "end": 1619
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1620,
                          "end": 1625,
                          "name": "nc_p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 1628,
                        "end": 1645,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1628,
                          "end": 1638,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1628,
                            "end": 1632
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1633,
                            "end": 1638,
                            "name": "nc_p2",
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
                            "start": 1639,
                            "end": 1644,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 1657,
            "end": 1680,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1665,
              "end": 1671,
              "name": "nc_pp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1671,
              "end": 1679,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1673,
                "end": 1679
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1685,
            "end": 1750,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1693,
              "end": 1699,
              "name": "nc_pp2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1699,
              "end": 1750,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1700,
                  "end": 1709,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1701,
                    "end": 1709,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1703,
                      "end": 1709
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1711,
                "end": 1750,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1721,
                    "end": 1744,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1728,
                      "end": 1743,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1728,
                        "end": 1739,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1728,
                          "end": 1732
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1733,
                          "end": 1739,
                          "name": "nc_pp1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1742,
                        "end": 1743,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1755,
            "end": 1824,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1767,
              "end": 1773,
              "name": "nc_pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1773,
              "end": 1824,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1776,
                "end": 1824,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1786,
                    "end": 1818,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1793,
                      "end": 1817,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1793,
                        "end": 1804,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1793,
                          "end": 1797
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1798,
                          "end": 1804,
                          "name": "nc_pp2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1805,
                          "end": 1816,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1805,
                            "end": 1809
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1810,
                            "end": 1816,
                            "name": "nc_pp1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1829,
            "end": 1912,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1841,
              "end": 1847,
              "name": "nc_pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1847,
              "end": 1912,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1848,
                  "end": 1861,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1853,
                    "end": 1861,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1855,
                      "end": 1861
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1863,
                "end": 1912,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1873,
                    "end": 1906,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1873,
                      "end": 1905,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1873,
                        "end": 1884,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1873,
                          "end": 1877
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1878,
                          "end": 1884,
                          "name": "nc_pp1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 1887,
                        "end": 1905,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1887,
                          "end": 1898,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1887,
                            "end": 1891
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1892,
                            "end": 1898,
                            "name": "nc_pp2",
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
                            "start": 1899,
                            "end": 1904,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 1917,
            "end": 1938,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1924,
              "end": 1929,
              "name": "nc_s1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1929,
              "end": 1937,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1931,
                "end": 1937
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1943,
            "end": 2003,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1950,
              "end": 1955,
              "name": "nc_s2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1955,
              "end": 2003,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1956,
                  "end": 1965,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1957,
                    "end": 1965,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1959,
                      "end": 1965
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1967,
                "end": 2003,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1977,
                    "end": 1997,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1984,
                      "end": 1996,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1984,
                        "end": 1992,
                        "object": {
                          "type": "Identifier",
                          "start": 1984,
                          "end": 1986,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1987,
                          "end": 1992,
                          "name": "nc_s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1995,
                        "end": 1996,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "start": 2008,
            "end": 2069,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2019,
              "end": 2024,
              "name": "nc_s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2024,
              "end": 2069,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2027,
                "end": 2069,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2037,
                    "end": 2063,
                    "argument": {
                      "type": "CallExpression",
                      "start": 2044,
                      "end": 2062,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2044,
                        "end": 2052,
                        "object": {
                          "type": "Identifier",
                          "start": 2044,
                          "end": 2046,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2047,
                          "end": 2052,
                          "name": "nc_s2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 2053,
                          "end": 2061,
                          "object": {
                            "type": "Identifier",
                            "start": 2053,
                            "end": 2055,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2056,
                            "end": 2061,
                            "name": "nc_s1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
          },
          {
            "type": "MethodDefinition",
            "start": 2074,
            "end": 2149,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2085,
              "end": 2090,
              "name": "nc_s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 2090,
              "end": 2149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2091,
                  "end": 2104,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2096,
                    "end": 2104,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2098,
                      "end": 2104
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2106,
                "end": 2149,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2116,
                    "end": 2143,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2116,
                      "end": 2142,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2116,
                        "end": 2124,
                        "object": {
                          "type": "Identifier",
                          "start": 2116,
                          "end": 2118,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2119,
                          "end": 2124,
                          "name": "nc_s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 2127,
                        "end": 2142,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2127,
                          "end": 2135,
                          "object": {
                            "type": "Identifier",
                            "start": 2127,
                            "end": 2129,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2130,
                            "end": 2135,
                            "name": "nc_s2",
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
                            "start": 2136,
                            "end": 2141,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2183,
            "end": 2203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2190,
              "end": 2194,
              "name": "a_p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2194,
              "end": 2202,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2196,
                "end": 2202
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 2233,
            "end": 2293,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2240,
              "end": 2244,
              "name": "a_p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2244,
              "end": 2293,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2245,
                  "end": 2254,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2246,
                    "end": 2254,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2248,
                      "end": 2254
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2256,
                "end": 2293,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2266,
                    "end": 2287,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2273,
                      "end": 2286,
                      "left": {
                        "type": "MemberExpression",
                        "start": 2273,
                        "end": 2282,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2273,
                          "end": 2277
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2278,
                          "end": 2282,
                          "name": "a_p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2285,
                        "end": 2286,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 2321,
            "end": 2383,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2332,
              "end": 2336,
              "name": "a_p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2336,
              "end": 2383,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2339,
                "end": 2383,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2349,
                    "end": 2377,
                    "argument": {
                      "type": "CallExpression",
                      "start": 2356,
                      "end": 2376,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2356,
                        "end": 2365,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2356,
                          "end": 2360
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2361,
                          "end": 2365,
                          "name": "a_p2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 2366,
                          "end": 2375,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2366,
                            "end": 2370
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2371,
                            "end": 2375,
                            "name": "a_p1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 2411,
            "end": 2487,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2422,
              "end": 2426,
              "name": "a_p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 2426,
              "end": 2487,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2427,
                  "end": 2440,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2432,
                    "end": 2440,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2434,
                      "end": 2440
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2442,
                "end": 2487,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2452,
                    "end": 2481,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2452,
                      "end": 2480,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2452,
                        "end": 2461,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2452,
                          "end": 2456
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2457,
                          "end": 2461,
                          "name": "a_p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 2464,
                        "end": 2480,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2464,
                          "end": 2473,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2464,
                            "end": 2468
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2469,
                            "end": 2473,
                            "name": "a_p2",
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
                            "start": 2474,
                            "end": 2479,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 2521,
            "end": 2543,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2529,
              "end": 2534,
              "name": "a_pp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2534,
              "end": 2542,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2536,
                "end": 2542
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2573,
            "end": 2635,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2581,
              "end": 2586,
              "name": "a_pp2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2586,
              "end": 2635,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2587,
                  "end": 2596,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2588,
                    "end": 2596,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2590,
                      "end": 2596
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2598,
                "end": 2635,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2608,
                    "end": 2629,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2615,
                      "end": 2628,
                      "left": {
                        "type": "MemberExpression",
                        "start": 2615,
                        "end": 2624,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2615,
                          "end": 2619
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2620,
                          "end": 2624,
                          "name": "a_p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2627,
                        "end": 2628,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2663,
            "end": 2729,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2675,
              "end": 2680,
              "name": "a_pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2680,
              "end": 2729,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2683,
                "end": 2729,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2693,
                    "end": 2723,
                    "argument": {
                      "type": "CallExpression",
                      "start": 2700,
                      "end": 2722,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2700,
                        "end": 2710,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2700,
                          "end": 2704
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2705,
                          "end": 2710,
                          "name": "a_pp2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 2711,
                          "end": 2721,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2711,
                            "end": 2715
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2716,
                            "end": 2721,
                            "name": "a_pp1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2757,
            "end": 2837,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2769,
              "end": 2774,
              "name": "a_pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 2774,
              "end": 2837,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2775,
                  "end": 2788,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2780,
                    "end": 2788,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2782,
                      "end": 2788
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2790,
                "end": 2837,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2800,
                    "end": 2831,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2800,
                      "end": 2830,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2800,
                        "end": 2810,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2800,
                          "end": 2804
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2805,
                          "end": 2810,
                          "name": "a_pp1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 2813,
                        "end": 2830,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2813,
                          "end": 2823,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2813,
                            "end": 2817
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2818,
                            "end": 2823,
                            "name": "a_pp2",
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
                            "start": 2824,
                            "end": 2829,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 2882,
            "end": 2902,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2889,
              "end": 2893,
              "name": "a_s1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2893,
              "end": 2901,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2895,
                "end": 2901
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2939,
            "end": 2997,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2946,
              "end": 2950,
              "name": "a_s2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2950,
              "end": 2997,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2951,
                  "end": 2960,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2952,
                    "end": 2960,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2954,
                      "end": 2960
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2962,
                "end": 2997,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2972,
                    "end": 2991,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2979,
                      "end": 2990,
                      "left": {
                        "type": "MemberExpression",
                        "start": 2979,
                        "end": 2986,
                        "object": {
                          "type": "Identifier",
                          "start": 2979,
                          "end": 2981,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2982,
                          "end": 2986,
                          "name": "a_s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2989,
                        "end": 2990,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "start": 3032,
            "end": 3086,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3043,
              "end": 3047,
              "name": "a_s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 3047,
              "end": 3086,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3050,
                "end": 3086,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3060,
                    "end": 3080,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3067,
                      "end": 3079,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3067,
                        "end": 3072,
                        "object": {
                          "type": "Identifier",
                          "start": 3067,
                          "end": 3069,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3070,
                          "end": 3072,
                          "name": "s2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 3073,
                          "end": 3078,
                          "object": {
                            "type": "Identifier",
                            "start": 3073,
                            "end": 3075,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3076,
                            "end": 3078,
                            "name": "s1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
          },
          {
            "type": "MethodDefinition",
            "start": 3119,
            "end": 3191,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3130,
              "end": 3134,
              "name": "a_s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3134,
              "end": 3191,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3135,
                  "end": 3148,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3140,
                    "end": 3148,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3142,
                      "end": 3148
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3150,
                "end": 3191,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3160,
                    "end": 3185,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3160,
                      "end": 3184,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3160,
                        "end": 3167,
                        "object": {
                          "type": "Identifier",
                          "start": 3160,
                          "end": 3162,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3163,
                          "end": 3167,
                          "name": "a_s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 3170,
                        "end": 3184,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3170,
                          "end": 3177,
                          "object": {
                            "type": "Identifier",
                            "start": 3170,
                            "end": 3172,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3173,
                            "end": 3177,
                            "name": "a_s2",
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
                            "start": 3178,
                            "end": 3183,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3229,
            "end": 3249,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3236,
              "end": 3240,
              "name": "b_p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3240,
              "end": 3248,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3242,
                "end": 3248
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 3283,
            "end": 3343,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3290,
              "end": 3294,
              "name": "b_p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3294,
              "end": 3343,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3295,
                  "end": 3304,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3296,
                    "end": 3304,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3298,
                      "end": 3304
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3306,
                "end": 3343,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3316,
                    "end": 3337,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 3323,
                      "end": 3336,
                      "left": {
                        "type": "MemberExpression",
                        "start": 3323,
                        "end": 3332,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3323,
                          "end": 3327
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3328,
                          "end": 3332,
                          "name": "b_p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3335,
                        "end": 3336,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 3375,
            "end": 3437,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3386,
              "end": 3390,
              "name": "b_p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 3390,
              "end": 3437,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3393,
                "end": 3437,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3403,
                    "end": 3431,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3410,
                      "end": 3430,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3410,
                        "end": 3419,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3410,
                          "end": 3414
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3415,
                          "end": 3419,
                          "name": "b_p2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 3420,
                          "end": 3429,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3420,
                            "end": 3424
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3425,
                            "end": 3429,
                            "name": "b_p1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 3469,
            "end": 3545,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3480,
              "end": 3484,
              "name": "b_p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3484,
              "end": 3545,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3485,
                  "end": 3498,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3490,
                    "end": 3498,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3492,
                      "end": 3498
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3500,
                "end": 3545,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3510,
                    "end": 3539,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3510,
                      "end": 3538,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3510,
                        "end": 3519,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3510,
                          "end": 3514
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3515,
                          "end": 3519,
                          "name": "b_p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 3522,
                        "end": 3538,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3522,
                          "end": 3531,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3522,
                            "end": 3526
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3527,
                            "end": 3531,
                            "name": "b_p2",
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
                            "start": 3532,
                            "end": 3537,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 3583,
            "end": 3605,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3591,
              "end": 3596,
              "name": "b_pp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3596,
              "end": 3604,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3598,
                "end": 3604
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3639,
            "end": 3701,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3647,
              "end": 3652,
              "name": "b_pp2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3652,
              "end": 3701,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3653,
                  "end": 3662,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3654,
                    "end": 3662,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3656,
                      "end": 3662
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3664,
                "end": 3701,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3674,
                    "end": 3695,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 3681,
                      "end": 3694,
                      "left": {
                        "type": "MemberExpression",
                        "start": 3681,
                        "end": 3690,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3681,
                          "end": 3685
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3686,
                          "end": 3690,
                          "name": "b_p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3693,
                        "end": 3694,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3733,
            "end": 3799,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3745,
              "end": 3750,
              "name": "b_pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 3750,
              "end": 3799,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3753,
                "end": 3799,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3763,
                    "end": 3793,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3770,
                      "end": 3792,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3770,
                        "end": 3780,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3770,
                          "end": 3774
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3775,
                          "end": 3780,
                          "name": "b_pp2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 3781,
                          "end": 3791,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3781,
                            "end": 3785
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3786,
                            "end": 3791,
                            "name": "b_pp1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3831,
            "end": 3911,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3843,
              "end": 3848,
              "name": "b_pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3848,
              "end": 3911,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3849,
                  "end": 3862,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3854,
                    "end": 3862,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3856,
                      "end": 3862
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3864,
                "end": 3911,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3874,
                    "end": 3905,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3874,
                      "end": 3904,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3874,
                        "end": 3884,
                        "object": {
                          "type": "ThisExpression",
                          "start": 3874,
                          "end": 3878
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3879,
                          "end": 3884,
                          "name": "b_pp1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 3887,
                        "end": 3904,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3887,
                          "end": 3897,
                          "object": {
                            "type": "ThisExpression",
                            "start": 3887,
                            "end": 3891
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3892,
                            "end": 3897,
                            "name": "b_pp2",
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
                            "start": 3898,
                            "end": 3903,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 3960,
            "end": 3980,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3967,
              "end": 3971,
              "name": "b_s1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3971,
              "end": 3979,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3973,
                "end": 3979
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4021,
            "end": 4079,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4028,
              "end": 4032,
              "name": "b_s2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4032,
              "end": 4079,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4033,
                  "end": 4042,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4034,
                    "end": 4042,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4036,
                      "end": 4042
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4044,
                "end": 4079,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4054,
                    "end": 4073,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 4061,
                      "end": 4072,
                      "left": {
                        "type": "MemberExpression",
                        "start": 4061,
                        "end": 4068,
                        "object": {
                          "type": "Identifier",
                          "start": 4061,
                          "end": 4063,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4064,
                          "end": 4068,
                          "name": "b_s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 4071,
                        "end": 4072,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "start": 4123,
            "end": 4177,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4134,
              "end": 4138,
              "name": "b_s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 4138,
              "end": 4177,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4141,
                "end": 4177,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4151,
                    "end": 4171,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4158,
                      "end": 4170,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4158,
                        "end": 4163,
                        "object": {
                          "type": "Identifier",
                          "start": 4158,
                          "end": 4160,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4161,
                          "end": 4163,
                          "name": "s2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 4164,
                          "end": 4169,
                          "object": {
                            "type": "Identifier",
                            "start": 4164,
                            "end": 4166,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4167,
                            "end": 4169,
                            "name": "s1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
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
          },
          {
            "type": "MethodDefinition",
            "start": 4219,
            "end": 4313,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4230,
              "end": 4234,
              "name": "b_s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 4234,
              "end": 4313,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4235,
                  "end": 4248,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4240,
                    "end": 4248,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4242,
                      "end": 4248
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4250,
                "end": 4313,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4282,
                    "end": 4307,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4282,
                      "end": 4306,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 4282,
                        "end": 4289,
                        "object": {
                          "type": "Identifier",
                          "start": 4282,
                          "end": 4284,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4285,
                          "end": 4289,
                          "name": "b_s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 4292,
                        "end": 4306,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4292,
                          "end": 4299,
                          "object": {
                            "type": "Identifier",
                            "start": 4292,
                            "end": 4294,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4295,
                            "end": 4299,
                            "name": "b_s2",
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
                            "start": 4300,
                            "end": 4305,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 4316,
      "end": 4334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4320,
          "end": 4333,
          "id": {
            "type": "Identifier",
            "start": 4320,
            "end": 4322,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 4325,
            "end": 4333,
            "callee": {
              "type": "Identifier",
              "start": 4329,
              "end": 4331,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4335,
      "end": 4352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4339,
          "end": 4351,
          "id": {
            "type": "Identifier",
            "start": 4339,
            "end": 4343,
            "name": "i1_p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4346,
            "end": 4351,
            "object": {
              "type": "Identifier",
              "start": 4346,
              "end": 4348,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4349,
              "end": 4351,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4353,
      "end": 4370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4357,
          "end": 4369,
          "id": {
            "type": "Identifier",
            "start": 4357,
            "end": 4361,
            "name": "i1_f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4364,
            "end": 4369,
            "object": {
              "type": "Identifier",
              "start": 4364,
              "end": 4366,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4367,
              "end": 4369,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4371,
      "end": 4392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4375,
          "end": 4391,
          "id": {
            "type": "Identifier",
            "start": 4375,
            "end": 4379,
            "name": "i1_r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4382,
            "end": 4391,
            "callee": {
              "type": "MemberExpression",
              "start": 4382,
              "end": 4387,
              "object": {
                "type": "Identifier",
                "start": 4382,
                "end": 4384,
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4385,
                "end": 4387,
                "name": "p2",
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
                "start": 4388,
                "end": 4390,
                "value": 20,
                "raw": "20"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4393,
      "end": 4413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4397,
          "end": 4412,
          "id": {
            "type": "Identifier",
            "start": 4397,
            "end": 4404,
            "name": "i1_prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4407,
            "end": 4412,
            "object": {
              "type": "Identifier",
              "start": 4407,
              "end": 4409,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4410,
              "end": 4412,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4414,
      "end": 4430,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4414,
        "end": 4429,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4414,
          "end": 4419,
          "object": {
            "type": "Identifier",
            "start": 4414,
            "end": 4416,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4417,
            "end": 4419,
            "name": "p3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4422,
          "end": 4429,
          "name": "i1_prop",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4431,
      "end": 4454,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4435,
          "end": 4453,
          "id": {
            "type": "Identifier",
            "start": 4435,
            "end": 4442,
            "name": "i1_nc_p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4445,
            "end": 4453,
            "object": {
              "type": "Identifier",
              "start": 4445,
              "end": 4447,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4448,
              "end": 4453,
              "name": "nc_p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4455,
      "end": 4477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4459,
          "end": 4476,
          "id": {
            "type": "Identifier",
            "start": 4459,
            "end": 4465,
            "name": "i1_ncf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4468,
            "end": 4476,
            "object": {
              "type": "Identifier",
              "start": 4468,
              "end": 4470,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4471,
              "end": 4476,
              "name": "nc_p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4478,
      "end": 4504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4482,
          "end": 4503,
          "id": {
            "type": "Identifier",
            "start": 4482,
            "end": 4488,
            "name": "i1_ncr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4491,
            "end": 4503,
            "callee": {
              "type": "MemberExpression",
              "start": 4491,
              "end": 4499,
              "object": {
                "type": "Identifier",
                "start": 4491,
                "end": 4493,
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4494,
                "end": 4499,
                "name": "nc_p2",
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
                "start": 4500,
                "end": 4502,
                "value": 20,
                "raw": "20"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4505,
      "end": 4530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4509,
          "end": 4529,
          "id": {
            "type": "Identifier",
            "start": 4509,
            "end": 4518,
            "name": "i1_ncprop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4521,
            "end": 4529,
            "object": {
              "type": "Identifier",
              "start": 4521,
              "end": 4523,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4524,
              "end": 4529,
              "name": "nc_p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4531,
      "end": 4552,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4531,
        "end": 4551,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4531,
          "end": 4539,
          "object": {
            "type": "Identifier",
            "start": 4531,
            "end": 4533,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4534,
            "end": 4539,
            "name": "nc_p3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4542,
          "end": 4551,
          "name": "i1_ncprop",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4553,
      "end": 4572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4557,
          "end": 4571,
          "id": {
            "type": "Identifier",
            "start": 4557,
            "end": 4563,
            "name": "i1_s_p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4566,
            "end": 4571,
            "object": {
              "type": "Identifier",
              "start": 4566,
              "end": 4568,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4569,
              "end": 4571,
              "name": "s1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4573,
      "end": 4592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4577,
          "end": 4591,
          "id": {
            "type": "Identifier",
            "start": 4577,
            "end": 4583,
            "name": "i1_s_f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4586,
            "end": 4591,
            "object": {
              "type": "Identifier",
              "start": 4586,
              "end": 4588,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4589,
              "end": 4591,
              "name": "s2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4593,
      "end": 4616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4597,
          "end": 4615,
          "id": {
            "type": "Identifier",
            "start": 4597,
            "end": 4603,
            "name": "i1_s_r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4606,
            "end": 4615,
            "callee": {
              "type": "MemberExpression",
              "start": 4606,
              "end": 4611,
              "object": {
                "type": "Identifier",
                "start": 4606,
                "end": 4608,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4609,
                "end": 4611,
                "name": "s2",
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
                "start": 4612,
                "end": 4614,
                "value": 20,
                "raw": "20"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4617,
      "end": 4639,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4621,
          "end": 4638,
          "id": {
            "type": "Identifier",
            "start": 4621,
            "end": 4630,
            "name": "i1_s_prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4633,
            "end": 4638,
            "object": {
              "type": "Identifier",
              "start": 4633,
              "end": 4635,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4636,
              "end": 4638,
              "name": "s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4640,
      "end": 4658,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4640,
        "end": 4657,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4640,
          "end": 4645,
          "object": {
            "type": "Identifier",
            "start": 4640,
            "end": 4642,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4643,
            "end": 4645,
            "name": "s3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4648,
          "end": 4657,
          "name": "i1_s_prop",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4659,
      "end": 4684,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4663,
          "end": 4683,
          "id": {
            "type": "Identifier",
            "start": 4663,
            "end": 4672,
            "name": "i1_s_nc_p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4675,
            "end": 4683,
            "object": {
              "type": "Identifier",
              "start": 4675,
              "end": 4677,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4678,
              "end": 4683,
              "name": "nc_s1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4685,
      "end": 4709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4689,
          "end": 4708,
          "id": {
            "type": "Identifier",
            "start": 4689,
            "end": 4697,
            "name": "i1_s_ncf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4700,
            "end": 4708,
            "object": {
              "type": "Identifier",
              "start": 4700,
              "end": 4702,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4703,
              "end": 4708,
              "name": "nc_s2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4710,
      "end": 4738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4714,
          "end": 4737,
          "id": {
            "type": "Identifier",
            "start": 4714,
            "end": 4722,
            "name": "i1_s_ncr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4725,
            "end": 4737,
            "callee": {
              "type": "MemberExpression",
              "start": 4725,
              "end": 4733,
              "object": {
                "type": "Identifier",
                "start": 4725,
                "end": 4727,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4728,
                "end": 4733,
                "name": "nc_s2",
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
                "start": 4734,
                "end": 4736,
                "value": 20,
                "raw": "20"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4739,
      "end": 4766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4743,
          "end": 4765,
          "id": {
            "type": "Identifier",
            "start": 4743,
            "end": 4754,
            "name": "i1_s_ncprop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4757,
            "end": 4765,
            "object": {
              "type": "Identifier",
              "start": 4757,
              "end": 4759,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4760,
              "end": 4765,
              "name": "nc_s3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4767,
      "end": 4790,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4767,
        "end": 4789,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4767,
          "end": 4775,
          "object": {
            "type": "Identifier",
            "start": 4767,
            "end": 4769,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4770,
            "end": 4775,
            "name": "nc_s3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4778,
          "end": 4789,
          "name": "i1_s_ncprop",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4791,
      "end": 4805,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4795,
          "end": 4804,
          "id": {
            "type": "Identifier",
            "start": 4795,
            "end": 4799,
            "name": "i1_c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 4802,
            "end": 4804,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 4806,
      "end": 5337,
      "id": {
        "type": "Identifier",
        "start": 4812,
        "end": 4823,
        "name": "cProperties",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4824,
        "end": 5337,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4830,
            "end": 4850,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4838,
              "end": 4841,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4841,
              "end": 4849,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4843,
                "end": 4849
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 4886,
            "end": 4934,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4897,
              "end": 4899,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 4899,
              "end": 4934,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4902,
                "end": 4934,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4912,
                    "end": 4928,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 4919,
                      "end": 4927,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4919,
                        "end": 4923
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4924,
                        "end": 4927,
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 4974,
            "end": 5025,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4985,
              "end": 4990,
              "name": "nc_p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 4990,
              "end": 5025,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4993,
                "end": 5025,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5003,
                    "end": 5019,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 5010,
                      "end": 5018,
                      "object": {
                        "type": "ThisExpression",
                        "start": 5010,
                        "end": 5014
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 5015,
                        "end": 5018,
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 5060,
            "end": 5122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5071,
              "end": 5073,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 5073,
              "end": 5122,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5074,
                  "end": 5087,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5079,
                    "end": 5087,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5081,
                      "end": 5087
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 5089,
                "end": 5122,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5099,
                    "end": 5116,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 5099,
                      "end": 5115,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5099,
                        "end": 5107,
                        "object": {
                          "type": "ThisExpression",
                          "start": 5099,
                          "end": 5103
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5104,
                          "end": 5107,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5110,
                        "end": 5115,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 5127,
            "end": 5192,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5138,
              "end": 5143,
              "name": "nc_p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 5143,
              "end": 5192,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5144,
                  "end": 5157,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5149,
                    "end": 5157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5151,
                      "end": 5157
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 5159,
                "end": 5192,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5169,
                    "end": 5186,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 5169,
                      "end": 5185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5169,
                        "end": 5177,
                        "object": {
                          "type": "ThisExpression",
                          "start": 5169,
                          "end": 5173
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5174,
                          "end": 5177,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5180,
                        "end": 5185,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 5235,
            "end": 5249,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5242,
              "end": 5243,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 5246,
              "end": 5248,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 5288,
            "end": 5303,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5296,
              "end": 5297,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 5300,
              "end": 5302,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5338,
      "end": 5376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5342,
          "end": 5375,
          "id": {
            "type": "Identifier",
            "start": 5342,
            "end": 5355,
            "name": "cProperties_i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5358,
            "end": 5375,
            "callee": {
              "type": "Identifier",
              "start": 5362,
              "end": 5373,
              "name": "cProperties",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 5377,
      "end": 5413,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5377,
        "end": 5412,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5377,
          "end": 5393,
          "object": {
            "type": "Identifier",
            "start": 5377,
            "end": 5390,
            "name": "cProperties_i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5391,
            "end": 5393,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 5396,
          "end": 5412,
          "object": {
            "type": "Identifier",
            "start": 5396,
            "end": 5409,
            "name": "cProperties_i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5410,
            "end": 5412,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5414,
      "end": 5456,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5414,
        "end": 5455,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5414,
          "end": 5433,
          "object": {
            "type": "Identifier",
            "start": 5414,
            "end": 5427,
            "name": "cProperties_i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5428,
            "end": 5433,
            "name": "nc_p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 5436,
          "end": 5455,
          "object": {
            "type": "Identifier",
            "start": 5436,
            "end": 5449,
            "name": "cProperties_i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5450,
            "end": 5455,
            "name": "nc_p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
