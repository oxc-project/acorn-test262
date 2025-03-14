__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1073,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 1072,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 1072,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 24,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 19,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 23,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 42,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 31,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 34,
              "end": 41,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 34,
                "end": 38
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 39,
                "end": 41,
                "decorators": [],
                "name": "p1",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 60,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 49,
              "decorators": [],
              "name": "p3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 52,
              "end": 59,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 52,
                "end": 56
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 57,
                "end": 59,
                "decorators": [],
                "name": "p4",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 72,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 67,
              "decorators": [],
              "name": "p4",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 77,
            "end": 89,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 79,
              "decorators": [],
              "name": "p5",
              "optional": false
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 82,
                "end": 88
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 95,
            "end": 107,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 97,
              "decorators": [],
              "name": "p6",
              "optional": false
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 162,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 114,
              "decorators": [],
              "name": "p7",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "start": 117,
              "end": 161,
              "properties": [
                {
                  "type": "Property",
                  "start": 127,
                  "end": 154,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 132,
                    "decorators": [],
                    "name": "hello",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentExpression",
                    "start": 135,
                    "end": 153,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 135,
                      "end": 142,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 135,
                        "end": 139
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 142,
                        "decorators": [],
                        "name": "p6",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 145,
                      "end": 153,
                      "raw": "\"string\"",
                      "value": "string"
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 214,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 184,
              "decorators": [],
              "name": "directlyAssigned",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 189,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 186,
                "end": 189
              }
            },
            "value": {
              "type": "MemberExpression",
              "start": 192,
              "end": 213,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 192,
                "end": 196
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 197,
                "end": 213,
                "decorators": [],
                "name": "directlyAssigned",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 220,
            "end": 278,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 239,
              "decorators": [],
              "name": "withinArrowFunction",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 244,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 241,
                "end": 244
              }
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 247,
              "end": 277,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 253,
                "end": 277,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 253,
                  "end": 257
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 277,
                  "decorators": [],
                  "name": "withinArrowFunction",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 284,
            "end": 362,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 298,
              "decorators": [],
              "name": "withinFunction",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 303,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 300,
                "end": 303
              }
            },
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 361,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 318,
                "end": 361,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 328,
                    "end": 355,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 335,
                      "end": 354,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 335,
                        "end": 339
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 354,
                        "decorators": [],
                        "name": "withinFunction",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 368,
            "end": 445,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 368,
              "end": 387,
              "decorators": [],
              "name": "withinObjectLiteral",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 392,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 389,
                "end": 392
              }
            },
            "value": {
              "type": "ObjectExpression",
              "start": 395,
              "end": 444,
              "properties": [
                {
                  "type": "Property",
                  "start": 405,
                  "end": 437,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 406,
                    "end": 430,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 406,
                      "end": 410
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 411,
                      "end": 430,
                      "decorators": [],
                      "name": "withinObjectLiteral",
                      "optional": false
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 433,
                    "end": 437,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 451,
            "end": 584,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 451,
              "end": 480,
              "decorators": [],
              "name": "withinObjectLiteralGetterName",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 480,
              "end": 485,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 482,
                "end": 485
              }
            },
            "value": {
              "type": "ObjectExpression",
              "start": 488,
              "end": 583,
              "properties": [
                {
                  "type": "Property",
                  "start": 498,
                  "end": 577,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 503,
                    "end": 537,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 503,
                      "end": 507
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 508,
                      "end": 537,
                      "decorators": [],
                      "name": "withinObjectLiteralGetterName",
                      "optional": false
                    }
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 538,
                    "end": 577,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 541,
                      "end": 577,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 555,
                          "end": 567,
                          "argument": {
                            "type": "Literal",
                            "start": 562,
                            "end": 566,
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 590,
            "end": 695,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 590,
              "end": 619,
              "decorators": [],
              "name": "withinObjectLiteralSetterName",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 619,
              "end": 624,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 621,
                "end": 624
              }
            },
            "value": {
              "type": "ObjectExpression",
              "start": 627,
              "end": 694,
              "properties": [
                {
                  "type": "Property",
                  "start": 637,
                  "end": 688,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 642,
                    "end": 676,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 642,
                      "end": 646
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 676,
                      "decorators": [],
                      "name": "withinObjectLiteralSetterName",
                      "optional": false
                    }
                  },
                  "kind": "set",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 677,
                    "end": 688,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 686,
                      "end": 688,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 678,
                        "end": 684,
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 679,
                          "end": 684,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 681,
                            "end": 684
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 701,
            "end": 797,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 701,
              "end": 732,
              "decorators": [],
              "name": "withinClassDeclarationExtension",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 732,
              "end": 737,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 734,
                "end": 737
              }
            },
            "value": {
              "type": "ClassExpression",
              "start": 741,
              "end": 795,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 792,
                "end": 795,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "start": 755,
                "end": 791,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 755,
                  "end": 759
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 791,
                  "decorators": [],
                  "name": "withinClassDeclarationExtension",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 803,
            "end": 826,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 803,
              "end": 815,
              "decorators": [],
              "name": "fromOptional",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 818,
              "end": 825,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 818,
                "end": 822
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 823,
                "end": 825,
                "decorators": [],
                "name": "p5",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 909,
            "end": 974,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 909,
              "end": 932,
              "decorators": [],
              "name": "assignedByArrowFunction",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 932,
              "end": 937,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 934,
                "end": 937
              }
            },
            "value": {
              "type": "CallExpression",
              "start": 940,
              "end": 973,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 941,
                "end": 970,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 947,
                  "end": 970,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 947,
                    "end": 951
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 952,
                    "end": 970,
                    "decorators": [],
                    "name": "assignedByFunction",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 980,
            "end": 1070,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 980,
              "end": 998,
              "decorators": [],
              "name": "assignedByFunction",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 998,
              "end": 1003,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1000,
                "end": 1003
              }
            },
            "value": {
              "type": "CallExpression",
              "start": 1006,
              "end": 1069,
              "arguments": [],
              "callee": {
                "type": "FunctionExpression",
                "start": 1007,
                "end": 1066,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1019,
                  "end": 1066,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1029,
                      "end": 1060,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1036,
                        "end": 1059,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1036,
                          "end": 1040
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1041,
                          "end": 1059,
                          "decorators": [],
                          "name": "assignedByFunction",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
