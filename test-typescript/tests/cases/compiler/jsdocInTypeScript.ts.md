__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 1348,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 104,
      "end": 133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 133,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 131,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 122,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 142,
      "expression": {
        "type": "MemberExpression",
        "start": 135,
        "end": 141,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "decorators": [],
          "name": "prop",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 290,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 290,
            "decorators": [],
            "name": "myType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 290,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 290,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 290,
                  "decorators": [],
                  "name": "MyType",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 441,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 424,
        "end": 441,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 426,
            "end": 439,
            "argument": {
              "type": "BinaryExpression",
              "start": 433,
              "end": 438,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 433,
                "end": 434,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 437,
                "end": 438,
                "raw": "2",
                "value": 2
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
        "start": 410,
        "end": 411,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 412,
          "end": 422,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 422,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 415,
              "end": 422
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 522,
      "end": 527,
      "expression": {
        "type": "CallExpression",
        "start": 522,
        "end": 526,
        "arguments": [
          {
            "type": "Literal",
            "start": 524,
            "end": 525,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 522,
          "end": 523,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 528,
      "end": 543,
      "expression": {
        "type": "MemberExpression",
        "start": 528,
        "end": 542,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 528,
          "end": 535,
          "arguments": [
            {
              "type": "Literal",
              "start": 530,
              "end": 534,
              "raw": "true",
              "value": true
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 528,
            "end": 529,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 536,
          "end": 542,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 619,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 618,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 613,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 616,
            "end": 618,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 620,
      "end": 628,
      "expression": {
        "type": "AssignmentExpression",
        "start": 620,
        "end": 627,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 620,
          "end": 623,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 622,
            "end": 623,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 626,
          "end": 627,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 724,
      "end": 760,
      "body": {
        "type": "TSInterfaceBody",
        "start": 758,
        "end": 760,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 734,
        "end": 735,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 735,
        "end": 757,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 736,
            "end": 756,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 746,
              "end": 752
            },
            "default": {
              "type": "TSLiteralType",
              "start": 755,
              "end": 756,
              "literal": {
                "type": "Literal",
                "start": 755,
                "end": 756,
                "raw": "0",
                "value": 0
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 781,
      "end": 838,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 824,
        "end": 838,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 826,
            "end": 836,
            "argument": {
              "type": "ObjectExpression",
              "start": 833,
              "end": 835,
              "properties": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 793,
        "decorators": [],
        "name": "tem",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 812,
          "end": 816,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 813,
            "end": 816,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 815,
              "end": 816,
              "typeName": {
                "type": "Identifier",
                "start": 815,
                "end": 816,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 817,
        "end": 823,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 819,
          "end": 823,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 820,
            "end": 823,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 821,
                "end": 822,
                "typeName": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 822,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 819,
            "end": 820,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 793,
        "end": 811,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 794,
            "end": 810,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 804,
              "end": 810
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 840,
      "end": 849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 844,
          "end": 848,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 844,
            "end": 848,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 845,
              "end": 848,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 847,
                "end": 848,
                "typeName": {
                  "type": "Identifier",
                  "start": 847,
                  "end": 848,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 933,
      "end": 946,
      "id": {
        "type": "Identifier",
        "start": 940,
        "end": 941,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 944,
        "end": 945,
        "decorators": [],
        "name": "N",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1136,
      "end": 1173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1142,
          "end": 1172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1142,
            "end": 1145,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1148,
            "end": 1172,
            "properties": [
              {
                "type": "Property",
                "start": 1150,
                "end": 1170,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1150,
                  "end": 1153,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1155,
                  "end": 1170,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1165,
                    "end": 1170,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1166,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1156,
                      "end": 1157,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1159,
                      "end": 1160,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1197,
      "end": 1208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1201,
          "end": 1207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1201,
            "end": 1202,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1205,
            "end": 1207,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1209,
      "end": 1215,
      "expression": {
        "type": "MemberExpression",
        "start": 1209,
        "end": 1214,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 1209,
          "end": 1210,
          "decorators": [],
          "name": "E",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 1211,
          "end": 1213,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1322,
      "end": 1347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1326,
          "end": 1346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1326,
            "end": 1327,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 1330,
            "end": 1346,
            "options": null,
            "source": {
              "type": "CallExpression",
              "start": 1337,
              "end": 1345,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1337,
                "end": 1343,
                "decorators": [],
                "name": "String",
                "optional": false
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
