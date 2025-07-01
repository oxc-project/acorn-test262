__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "typeArguments": null,
                "start": 100,
                "end": 101
              },
              "start": 98,
              "end": 101
            },
            "start": 97,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 97,
          "end": 101
        }
      ],
      "declare": true,
      "start": 83,
      "end": 102
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 111
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 118,
            "end": 131
          }
        ],
        "start": 112,
        "end": 133
      },
      "abstract": false,
      "declare": false,
      "start": 104,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 136
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 141
        },
        "optional": false,
        "computed": false,
        "start": 135,
        "end": 141
      },
      "directive": null,
      "start": 135,
      "end": 142
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 290
                },
                "typeArguments": null,
                "start": 284,
                "end": 290
              },
              "start": 282,
              "end": 290
            },
            "start": 276,
            "end": 290
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 290
        }
      ],
      "declare": true,
      "start": 262,
      "end": 291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 411
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 415,
              "end": 422
            },
            "start": 413,
            "end": 422
          },
          "start": 412,
          "end": 422
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 434
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 437,
                "end": 438
              },
              "start": 433,
              "end": 438
            },
            "start": 426,
            "end": 439
          }
        ],
        "start": 424,
        "end": 441
      },
      "expression": false,
      "start": 401,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 523
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 524,
            "end": 525
          }
        ],
        "optional": false,
        "start": 522,
        "end": 526
      },
      "directive": null,
      "start": 522,
      "end": 527
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 529
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 530,
              "end": 534
            }
          ],
          "optional": false,
          "start": 528,
          "end": 535
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 542
        },
        "optional": false,
        "computed": false,
        "start": 528,
        "end": 542
      },
      "directive": null,
      "start": 528,
      "end": 543
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 613
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 616,
            "end": 618
          },
          "definite": false,
          "start": 612,
          "end": 618
        }
      ],
      "declare": false,
      "start": 606,
      "end": 619
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 620,
            "end": 621
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 622,
            "end": 623
          },
          "optional": false,
          "computed": false,
          "start": 620,
          "end": 623
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 626,
          "end": 627
        },
        "start": 620,
        "end": 627
      },
      "directive": null,
      "start": 620,
      "end": 628
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 734,
        "end": 735
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 746,
              "end": 752
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 755,
                "end": 756
              },
              "start": 755,
              "end": 756
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 736,
            "end": 756
          }
        ],
        "start": 735,
        "end": 757
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 758,
        "end": 760
      },
      "declare": false,
      "start": 724,
      "end": 760
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tem",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 793
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 795
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 804,
              "end": 810
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 794,
            "end": 810
          }
        ],
        "start": 793,
        "end": 811
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 816
              },
              "typeArguments": null,
              "start": 815,
              "end": 816
            },
            "start": 813,
            "end": 816
          },
          "start": 812,
          "end": 816
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 820
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 822
                },
                "typeArguments": null,
                "start": 821,
                "end": 822
              }
            ],
            "start": 820,
            "end": 823
          },
          "start": 819,
          "end": 823
        },
        "start": 817,
        "end": 823
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 833,
              "end": 835
            },
            "start": 826,
            "end": 836
          }
        ],
        "start": 824,
        "end": 838
      },
      "expression": false,
      "start": 781,
      "end": 838
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 847,
                  "end": 848
                },
                "typeArguments": null,
                "start": 847,
                "end": 848
              },
              "start": 845,
              "end": 848
            },
            "start": 844,
            "end": 848
          },
          "init": null,
          "definite": false,
          "start": 844,
          "end": 848
        }
      ],
      "declare": false,
      "start": 840,
      "end": 849
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 941
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 944,
        "end": 945
      },
      "importKind": "value",
      "start": 933,
      "end": 946
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 1142,
            "end": 1145
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1150,
                  "end": 1153
                },
                "value": {
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
                      "start": 1156,
                      "end": 1157
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1159,
                      "end": 1160
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1165,
                      "end": 1166
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1170
                    },
                    "start": 1165,
                    "end": 1170
                  },
                  "id": null,
                  "generator": false,
                  "start": 1155,
                  "end": 1170
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1150,
                "end": 1170
              }
            ],
            "start": 1148,
            "end": 1172
          },
          "definite": false,
          "start": 1142,
          "end": 1172
        }
      ],
      "declare": false,
      "start": 1136,
      "end": 1173
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1202
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 1205,
            "end": 1207
          },
          "definite": false,
          "start": 1201,
          "end": 1207
        }
      ],
      "declare": false,
      "start": 1197,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1209,
          "end": 1210
        },
        "property": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 1211,
          "end": 1213
        },
        "optional": false,
        "computed": true,
        "start": 1209,
        "end": 1214
      },
      "directive": null,
      "start": 1209,
      "end": 1215
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 1326,
            "end": 1327
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 1337,
                "end": 1343
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1337,
              "end": 1345
            },
            "options": null,
            "phase": null,
            "start": 1330,
            "end": 1346
          },
          "definite": false,
          "start": 1326,
          "end": 1346
        }
      ],
      "declare": false,
      "start": 1322,
      "end": 1347
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 1347
}
```
