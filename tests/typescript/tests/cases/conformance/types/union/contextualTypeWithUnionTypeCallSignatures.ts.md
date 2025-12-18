__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithNoCallSignatures",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 558
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 568
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 570,
                "end": 576
              },
              "start": 568,
              "end": 576
            },
            "accessibility": null,
            "static": false,
            "start": 565,
            "end": 577
          }
        ],
        "start": 559,
        "end": 579
      },
      "declare": false,
      "start": 527,
      "end": 579
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithCallSignatures",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 609
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 620,
                    "end": 626
                  },
                  "start": 618,
                  "end": 626
                },
                "start": 617,
                "end": 626
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 629,
                "end": 635
              },
              "start": 627,
              "end": 635
            },
            "start": 616,
            "end": 636
          }
        ],
        "start": 610,
        "end": 638
      },
      "declare": false,
      "start": 580,
      "end": 638
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithCallSignatures2",
        "optional": false,
        "typeAnnotation": null,
        "start": 649,
        "end": 669
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 680,
                    "end": 686
                  },
                  "start": 678,
                  "end": 686
                },
                "start": 677,
                "end": 686
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 689,
                "end": 695
              },
              "start": 687,
              "end": 695
            },
            "start": 676,
            "end": 696
          }
        ],
        "start": 670,
        "end": 698
      },
      "declare": false,
      "start": 639,
      "end": 698
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithCallSignatures3",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 729
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 740,
                    "end": 746
                  },
                  "start": 738,
                  "end": 746
                },
                "start": 737,
                "end": 746
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 749,
                "end": 755
              },
              "start": 747,
              "end": 755
            },
            "start": 736,
            "end": 756
          }
        ],
        "start": 730,
        "end": 758
      },
      "declare": false,
      "start": 699,
      "end": 758
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IWithCallSignatures4",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 789
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 800,
                    "end": 806
                  },
                  "start": 798,
                  "end": 806
                },
                "start": 797,
                "end": 806
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 809,
                "end": 815
              },
              "start": 807,
              "end": 815
            },
            "start": 796,
            "end": 816
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 825,
                    "end": 831
                  },
                  "start": 823,
                  "end": 831
                },
                "start": 822,
                "end": 831
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 836,
                    "end": 842
                  },
                  "start": 834,
                  "end": 842
                },
                "start": 833,
                "end": 842
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 845,
                "end": 851
              },
              "start": 843,
              "end": 851
            },
            "start": 821,
            "end": 852
          }
        ],
        "start": 790,
        "end": 854
      },
      "declare": false,
      "start": 759,
      "end": 854
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithNoCallSignatures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 927
                    },
                    "typeArguments": null,
                    "start": 906,
                    "end": 927
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 930,
                      "end": 949
                    },
                    "typeArguments": null,
                    "start": 930,
                    "end": 949
                  }
                ],
                "start": 906,
                "end": 949
              },
              "start": 904,
              "end": 949
            },
            "start": 903,
            "end": 949
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 953
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 957,
                  "end": 958
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 959,
                  "end": 967
                },
                "optional": false,
                "computed": false,
                "start": 957,
                "end": 967
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 957,
              "end": 969
            },
            "id": null,
            "generator": false,
            "start": 952,
            "end": 969
          },
          "definite": false,
          "start": 903,
          "end": 969
        }
      ],
      "declare": false,
      "start": 899,
      "end": 970
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1031,
                      "end": 1050
                    },
                    "typeArguments": null,
                    "start": 1031,
                    "end": 1050
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1053,
                      "end": 1073
                    },
                    "typeArguments": null,
                    "start": 1053,
                    "end": 1073
                  }
                ],
                "start": 1031,
                "end": 1073
              },
              "start": 1029,
              "end": 1073
            },
            "start": 1027,
            "end": 1073
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1077
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1082
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1083,
                  "end": 1091
                },
                "optional": false,
                "computed": false,
                "start": 1081,
                "end": 1091
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1081,
              "end": 1093
            },
            "id": null,
            "generator": false,
            "start": 1076,
            "end": 1093
          },
          "definite": false,
          "start": 1027,
          "end": 1093
        }
      ],
      "declare": false,
      "start": 1023,
      "end": 1094
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1131,
                      "end": 1150
                    },
                    "typeArguments": null,
                    "start": 1131,
                    "end": 1150
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1173
                    },
                    "typeArguments": null,
                    "start": 1153,
                    "end": 1173
                  }
                ],
                "start": 1131,
                "end": 1173
              },
              "start": 1129,
              "end": 1173
            },
            "start": 1127,
            "end": 1173
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1176,
                "end": 1177
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1182
            },
            "id": null,
            "generator": false,
            "start": 1176,
            "end": 1182
          },
          "definite": false,
          "start": 1127,
          "end": 1182
        }
      ],
      "declare": false,
      "start": 1123,
      "end": 1183
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1276,
                      "end": 1295
                    },
                    "typeArguments": null,
                    "start": 1276,
                    "end": 1295
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1298,
                      "end": 1318
                    },
                    "typeArguments": null,
                    "start": 1298,
                    "end": 1318
                  }
                ],
                "start": 1276,
                "end": 1318
              },
              "start": 1274,
              "end": 1318
            },
            "start": 1272,
            "end": 1318
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1322
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1351,
                  "end": 1352
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1353,
                  "end": 1361
                },
                "optional": false,
                "computed": false,
                "start": 1351,
                "end": 1361
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1351,
              "end": 1363
            },
            "id": null,
            "generator": false,
            "start": 1321,
            "end": 1363
          },
          "definite": false,
          "start": 1272,
          "end": 1363
        }
      ],
      "declare": false,
      "start": 1268,
      "end": 1364
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1412,
                      "end": 1431
                    },
                    "typeArguments": null,
                    "start": 1412,
                    "end": 1431
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWithCallSignatures4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1434,
                      "end": 1454
                    },
                    "typeArguments": null,
                    "start": 1434,
                    "end": 1454
                  }
                ],
                "start": 1412,
                "end": 1454
              },
              "start": 1410,
              "end": 1454
            },
            "start": 1408,
            "end": 1454
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1457,
                "end": 1458
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1487,
                  "end": 1488
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1489,
                  "end": 1497
                },
                "optional": false,
                "computed": false,
                "start": 1487,
                "end": 1497
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1487,
              "end": 1499
            },
            "id": null,
            "generator": false,
            "start": 1457,
            "end": 1499
          },
          "definite": false,
          "start": 1408,
          "end": 1499
        }
      ],
      "declare": false,
      "start": 1404,
      "end": 1500
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 527,
  "end": 1500
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 527,
    "end": 536,
    "range": [
      527,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoCallSignatures",
    "start": 537,
    "end": 558,
    "range": [
      537,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 565,
    "end": 568,
    "range": [
      565,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 570,
    "end": 576,
    "range": [
      570,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 580,
    "end": 589,
    "range": [
      580,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures",
    "start": 590,
    "end": 609,
    "range": [
      590,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 620,
    "end": 626,
    "range": [
      620,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 629,
    "end": 635,
    "range": [
      629,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 639,
    "end": 648,
    "range": [
      639,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures2",
    "start": 649,
    "end": 669,
    "range": [
      649,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 680,
    "end": 686,
    "range": [
      680,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 689,
    "end": 695,
    "range": [
      689,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 699,
    "end": 708,
    "range": [
      699,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures3",
    "start": 709,
    "end": 729,
    "range": [
      709,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 740,
    "end": 746,
    "range": [
      740,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 749,
    "end": 755,
    "range": [
      749,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 759,
    "end": 768,
    "range": [
      759,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures4",
    "start": 769,
    "end": 789,
    "range": [
      769,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 800,
    "end": 806,
    "range": [
      800,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 809,
    "end": 815,
    "range": [
      809,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 825,
    "end": 831,
    "range": [
      825,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 836,
    "end": 842,
    "range": [
      836,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 845,
    "end": 851,
    "range": [
      845,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 899,
    "end": 902,
    "range": [
      899,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithNoCallSignatures",
    "start": 906,
    "end": 927,
    "range": [
      906,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures",
    "start": 930,
    "end": 949,
    "range": [
      930,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 954,
    "end": 956,
    "range": [
      954,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 959,
    "end": 967,
    "range": [
      959,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1023,
    "end": 1026,
    "range": [
      1023,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1027,
    "end": 1029,
    "range": [
      1027,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures",
    "start": 1031,
    "end": 1050,
    "range": [
      1031,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures2",
    "start": 1053,
    "end": 1073,
    "range": [
      1053,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1078,
    "end": 1080,
    "range": [
      1078,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1083,
    "end": 1091,
    "range": [
      1083,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1123,
    "end": 1126,
    "range": [
      1123,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1127,
    "end": 1129,
    "range": [
      1127,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures",
    "start": 1131,
    "end": 1150,
    "range": [
      1131,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures2",
    "start": 1153,
    "end": 1173,
    "range": [
      1153,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1178,
    "end": 1180,
    "range": [
      1178,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1268,
    "end": 1271,
    "range": [
      1268,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1272,
    "end": 1274,
    "range": [
      1272,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures",
    "start": 1276,
    "end": 1295,
    "range": [
      1276,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures3",
    "start": 1298,
    "end": 1318,
    "range": [
      1298,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1323,
    "end": 1325,
    "range": [
      1323,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1353,
    "end": 1361,
    "range": [
      1353,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1404,
    "end": 1407,
    "range": [
      1404,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1408,
    "end": 1410,
    "range": [
      1408,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures",
    "start": 1412,
    "end": 1431,
    "range": [
      1412,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "IWithCallSignatures4",
    "start": 1434,
    "end": 1454,
    "range": [
      1434,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1459,
    "end": 1461,
    "range": [
      1459,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1489,
    "end": 1497,
    "range": [
      1489,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  }
]
```
