__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 1347,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 102,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 101,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 104,
      "end": 133,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 133,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 131,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 122,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 142,
      "expression": {
        "type": "MemberExpression",
        "start": 135,
        "end": 141,
        "object": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 291,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 290,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 411,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
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
              "left": {
                "type": "Identifier",
                "start": 433,
                "end": 434,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "start": 437,
                "end": 438,
                "value": 2,
                "raw": "2"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 522,
      "end": 527,
      "expression": {
        "type": "CallExpression",
        "start": 522,
        "end": 526,
        "callee": {
          "type": "Identifier",
          "start": 522,
          "end": 523,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 524,
            "end": 525,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 528,
      "end": 543,
      "expression": {
        "type": "MemberExpression",
        "start": 528,
        "end": 542,
        "object": {
          "type": "CallExpression",
          "start": 528,
          "end": 535,
          "callee": {
            "type": "Identifier",
            "start": 528,
            "end": 529,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 530,
              "end": 534,
              "value": true,
              "raw": "true"
            }
          ],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 536,
          "end": 542,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 619,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 618,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 613,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 616,
            "end": 618,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 622,
            "end": 623,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 626,
          "end": 627,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 724,
      "end": 760,
      "id": {
        "type": "Identifier",
        "start": 734,
        "end": 735,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
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
                "value": 0,
                "raw": "0"
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 758,
        "end": 760,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 781,
      "end": 838,
      "id": {
        "type": "Identifier",
        "start": 790,
        "end": 793,
        "decorators": [],
        "name": "tem",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 793,
        "end": 811,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 794,
            "end": 810,
            "name": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 804,
              "end": 810
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 819,
            "end": 820,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 840,
      "end": 849,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 844,
          "end": 848,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 944,
        "end": 945,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 1136,
      "end": 1173,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1142,
          "end": 1172,
          "id": {
            "type": "Identifier",
            "start": 1142,
            "end": 1145,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1150,
                  "end": 1153,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1155,
                  "end": 1170,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1156,
                      "end": 1157,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1159,
                      "end": 1160,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1165,
                    "end": 1170,
                    "left": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1166,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1197,
      "end": 1208,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1201,
          "end": 1207,
          "id": {
            "type": "Identifier",
            "start": 1201,
            "end": 1202,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1205,
            "end": 1207,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1209,
      "end": 1215,
      "expression": {
        "type": "MemberExpression",
        "start": 1209,
        "end": 1214,
        "object": {
          "type": "Identifier",
          "start": 1209,
          "end": 1210,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 1211,
          "end": 1213,
          "value": "",
          "raw": "\"\""
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1322,
      "end": 1347,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1326,
          "end": 1346,
          "id": {
            "type": "Identifier",
            "start": 1326,
            "end": 1327,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 1330,
            "end": 1346,
            "source": {
              "type": "CallExpression",
              "start": 1337,
              "end": 1345,
              "callee": {
                "type": "Identifier",
                "start": 1337,
                "end": 1343,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
