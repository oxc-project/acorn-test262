__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 29,
    "end": 31,
    "range": [
      29,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 34,
    "end": 38,
    "range": [
      34,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 47,
    "end": 49,
    "range": [
      47,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 52,
    "end": 56,
    "range": [
      52,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 57,
    "end": 59,
    "range": [
      57,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 65,
    "end": 67,
    "range": [
      65,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 77,
    "end": 79,
    "range": [
      77,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 95,
    "end": 97,
    "range": [
      95,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "p7",
    "start": 112,
    "end": 114,
    "range": [
      112,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 127,
    "end": 132,
    "range": [
      127,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "p6",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 145,
    "end": 153,
    "range": [
      145,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "directlyAssigned",
    "start": 168,
    "end": 184,
    "range": [
      168,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 192,
    "end": 196,
    "range": [
      192,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "directlyAssigned",
    "start": 197,
    "end": 213,
    "range": [
      197,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "withinArrowFunction",
    "start": 220,
    "end": 239,
    "range": [
      220,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 241,
    "end": 244,
    "range": [
      241,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 250,
    "end": 252,
    "range": [
      250,
      252
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 253,
    "end": 257,
    "range": [
      253,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "withinArrowFunction",
    "start": 258,
    "end": 277,
    "range": [
      258,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "withinFunction",
    "start": 284,
    "end": 298,
    "range": [
      284,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 300,
    "end": 303,
    "range": [
      300,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 306,
    "end": 314,
    "range": [
      306,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 328,
    "end": 334,
    "range": [
      328,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 335,
    "end": 339,
    "range": [
      335,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "withinFunction",
    "start": 340,
    "end": 354,
    "range": [
      340,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "withinObjectLiteral",
    "start": 368,
    "end": 387,
    "range": [
      368,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 406,
    "end": 410,
    "range": [
      406,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "withinObjectLiteral",
    "start": 411,
    "end": 430,
    "range": [
      411,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 433,
    "end": 437,
    "range": [
      433,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "withinObjectLiteralGetterName",
    "start": 451,
    "end": 480,
    "range": [
      451,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 482,
    "end": 485,
    "range": [
      482,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 498,
    "end": 501,
    "range": [
      498,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 503,
    "end": 507,
    "range": [
      503,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "withinObjectLiteralGetterName",
    "start": 508,
    "end": 537,
    "range": [
      508,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 555,
    "end": 561,
    "range": [
      555,
      561
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 562,
    "end": 566,
    "range": [
      562,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "withinObjectLiteralSetterName",
    "start": 590,
    "end": 619,
    "range": [
      590,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 621,
    "end": 624,
    "range": [
      621,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 642,
    "end": 646,
    "range": [
      642,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "withinObjectLiteralSetterName",
    "start": 647,
    "end": 676,
    "range": [
      647,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 681,
    "end": 684,
    "range": [
      681,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "withinClassDeclarationExtension",
    "start": 701,
    "end": 732,
    "range": [
      701,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 734,
    "end": 737,
    "range": [
      734,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 741,
    "end": 746,
    "range": [
      741,
      746
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 747,
    "end": 754,
    "range": [
      747,
      754
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 755,
    "end": 759,
    "range": [
      755,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "withinClassDeclarationExtension",
    "start": 760,
    "end": 791,
    "range": [
      760,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "fromOptional",
    "start": 803,
    "end": 815,
    "range": [
      803,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 818,
    "end": 822,
    "range": [
      818,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 823,
    "end": 825,
    "range": [
      823,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "assignedByArrowFunction",
    "start": 909,
    "end": 932,
    "range": [
      909,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 934,
    "end": 937,
    "range": [
      934,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 944,
    "end": 946,
    "range": [
      944,
      946
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 947,
    "end": 951,
    "range": [
      947,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "assignedByFunction",
    "start": 952,
    "end": 970,
    "range": [
      952,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "assignedByFunction",
    "start": 980,
    "end": 998,
    "range": [
      980,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1007,
    "end": 1015,
    "range": [
      1007,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1029,
    "end": 1035,
    "range": [
      1029,
      1035
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1036,
    "end": 1040,
    "range": [
      1036,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "assignedByFunction",
    "start": 1041,
    "end": 1059,
    "range": [
      1041,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  }
]
```
