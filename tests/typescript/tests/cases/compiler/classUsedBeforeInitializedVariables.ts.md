__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 19
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 22,
              "end": 23
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 24
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 31
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 34,
                "end": 38
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 41
              },
              "optional": false,
              "computed": false,
              "start": 34,
              "end": 41
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 29,
            "end": 42
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 49
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 52,
                "end": 56
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p4",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 59
              },
              "optional": false,
              "computed": false,
              "start": 52,
              "end": 59
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 47,
            "end": 60
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p4",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 67
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 70,
              "end": 71
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 65,
            "end": 72
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p5",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 77,
            "end": 89
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p6",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 95,
            "end": 107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p7",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 114
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 132
                  },
                  "value": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 135,
                        "end": 139
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 142
                      },
                      "optional": false,
                      "computed": false,
                      "start": 135,
                      "end": 142
                    },
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 145,
                      "end": 153
                    },
                    "start": 135,
                    "end": 153
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 127,
                  "end": 154
                }
              ],
              "start": 117,
              "end": 161
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 112,
            "end": 162
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "directlyAssigned",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 186,
                "end": 189
              },
              "start": 184,
              "end": 189
            },
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 192,
                "end": 196
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "directlyAssigned",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 213
              },
              "optional": false,
              "computed": false,
              "start": 192,
              "end": 213
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 168,
            "end": 214
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "withinArrowFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 239
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 241,
                "end": 244
              },
              "start": 239,
              "end": 244
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 253,
                  "end": 257
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "withinArrowFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 277
                },
                "optional": false,
                "computed": false,
                "start": 253,
                "end": 277
              },
              "id": null,
              "generator": false,
              "start": 247,
              "end": 277
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 220,
            "end": 278
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "withinFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 300,
                "end": 303
              },
              "start": 298,
              "end": 303
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 335,
                        "end": 339
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "withinFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 354
                      },
                      "optional": false,
                      "computed": false,
                      "start": 335,
                      "end": 354
                    },
                    "start": 328,
                    "end": 355
                  }
                ],
                "start": 318,
                "end": 361
              },
              "expression": false,
              "start": 306,
              "end": 361
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 284,
            "end": 362
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "withinObjectLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 389,
                "end": 392
              },
              "start": 387,
              "end": 392
            },
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 406,
                      "end": 410
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "withinObjectLiteral",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 430
                    },
                    "optional": false,
                    "computed": false,
                    "start": 406,
                    "end": 430
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 433,
                    "end": 437
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 405,
                  "end": 437
                }
              ],
              "start": 395,
              "end": 444
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 368,
            "end": 445
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "withinObjectLiteralGetterName",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 480
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 482,
                "end": 485
              },
              "start": 480,
              "end": 485
            },
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 503,
                      "end": 507
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "withinObjectLiteralGetterName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 508,
                      "end": 537
                    },
                    "optional": false,
                    "computed": false,
                    "start": 503,
                    "end": 537
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 562,
                            "end": 566
                          },
                          "start": 555,
                          "end": 567
                        }
                      ],
                      "start": 541,
                      "end": 577
                    },
                    "expression": false,
                    "start": 538,
                    "end": 577
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 498,
                  "end": 577
                }
              ],
              "start": 488,
              "end": 583
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 451,
            "end": 584
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "withinObjectLiteralSetterName",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 619
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 621,
                "end": 624
              },
              "start": 619,
              "end": 624
            },
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 642,
                      "end": 646
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "withinObjectLiteralSetterName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 676
                    },
                    "optional": false,
                    "computed": false,
                    "start": 642,
                    "end": 676
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 681,
                            "end": 684
                          },
                          "start": 679,
                          "end": 684
                        },
                        "start": 678,
                        "end": 684
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 686,
                      "end": 688
                    },
                    "expression": false,
                    "start": 677,
                    "end": 688
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 637,
                  "end": 688
                }
              ],
              "start": 627,
              "end": 694
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 590,
            "end": 695
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "withinClassDeclarationExtension",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 732
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 734,
                "end": 737
              },
              "start": 732,
              "end": 737
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 755,
                  "end": 759
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "withinClassDeclarationExtension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 791
                },
                "optional": false,
                "computed": false,
                "start": 755,
                "end": 791
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 792,
                "end": 795
              },
              "abstract": false,
              "declare": false,
              "start": 741,
              "end": 795
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 701,
            "end": 797
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fromOptional",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 815
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 818,
                "end": 822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p5",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 825
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 825
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 803,
            "end": 826
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assignedByArrowFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 934,
                "end": 937
              },
              "start": 932,
              "end": 937
            },
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 947,
                    "end": 951
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assignedByFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 952,
                    "end": 970
                  },
                  "optional": false,
                  "computed": false,
                  "start": 947,
                  "end": 970
                },
                "id": null,
                "generator": false,
                "start": 941,
                "end": 970
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 940,
              "end": 973
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 909,
            "end": 974
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assignedByFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 998
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1000,
                "end": 1003
              },
              "start": 998,
              "end": 1003
            },
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1036,
                          "end": 1040
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assignedByFunction",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1041,
                          "end": 1059
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1036,
                        "end": 1059
                      },
                      "start": 1029,
                      "end": 1060
                    }
                  ],
                  "start": 1019,
                  "end": 1066
                },
                "expression": false,
                "start": 1007,
                "end": 1066
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1006,
              "end": 1069
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 980,
            "end": 1070
          }
        ],
        "start": 11,
        "end": 1072
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 1072
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1072
}
```
