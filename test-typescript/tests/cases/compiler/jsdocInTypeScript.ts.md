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
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "name": "x",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 104,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 133,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 131,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 122,
              "name": "prop",
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
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              }
            },
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "name": "prop",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 290,
            "name": "myType",
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
                  "name": "MyType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 412,
          "end": 422,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 422,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 415,
              "end": 422
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 524,
            "end": 525,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
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
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 530,
              "end": 534,
              "value": true,
              "raw": "true"
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 536,
          "end": 542,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 613,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 622,
            "end": 623,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "tem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 812,
          "end": 816,
          "name": "t",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 844,
            "end": 848,
            "name": "i",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 944,
        "end": 945,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 1142,
            "end": 1145,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1150,
                  "end": 1153,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1155,
                  "end": 1170,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1156,
                      "end": 1157,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1159,
                      "end": 1160,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1165,
                    "end": 1170,
                    "left": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1166,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1201,
            "end": 1202,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
          "name": "E",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 1211,
          "end": 1213,
          "value": "",
          "raw": "\"\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1326,
            "end": 1327,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
