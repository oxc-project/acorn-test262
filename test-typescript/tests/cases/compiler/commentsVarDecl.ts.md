commentsVarDecl.ts
```json
{
  "type": "Program",
  "start": 24,
  "end": 1089,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 38,
            "decorators": [],
            "name": "myVariable",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 41,
            "end": 43,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 130,
            "decorators": [],
            "name": "anotherVariable",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 133,
            "end": 135,
            "raw": "30",
            "value": 30
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 166,
            "decorators": [],
            "name": "aVar",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 169,
            "end": 171,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 276,
            "decorators": [],
            "name": "anotherAnotherVariable",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 279,
            "end": 281,
            "raw": "70",
            "value": 70
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 452,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 457,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 460,
            "end": 462,
            "raw": "70",
            "value": 70
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 604,
      "end": 619,
      "expression": {
        "type": "AssignmentExpression",
        "start": 604,
        "end": 618,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 604,
          "end": 605,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 608,
          "end": 618,
          "decorators": [],
          "name": "myVariable",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 729,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 728,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 723,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 726,
            "end": 728,
            "raw": "30",
            "value": 30
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 782,
      "end": 814,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 786,
          "end": 813,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 787,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 811,
            "end": 813,
            "raw": "20",
            "value": 20
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 865,
      "end": 903,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 869,
          "end": 902,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 869,
            "end": 871,
            "decorators": [],
            "name": "yy",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 900,
            "end": 902,
            "raw": "20",
            "value": 20
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 921,
      "end": 983,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 982,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 926,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 951,
            "end": 982,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 977,
              "end": 982,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 977,
                "end": 978,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 981,
                "end": 982,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 952,
                "end": 961,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 953,
                  "end": 961,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 955,
                    "end": 961
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 963,
                "end": 972,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 964,
                  "end": 972,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 966,
                    "end": 972
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 985,
      "end": 1034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 989,
          "end": 1033,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 989,
            "end": 1033,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 991,
              "end": 1033,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1012,
                "end": 1033,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1013,
                    "end": 1022,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1014,
                      "end": 1022,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1016,
                        "end": 1022
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1024,
                  "end": 1033,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1027,
                    "end": 1033
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1036,
      "end": 1048,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1040,
          "end": 1047,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1040,
            "end": 1042,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1045,
            "end": 1047,
            "decorators": [],
            "name": "z2",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1050,
      "end": 1080,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1054,
          "end": 1079,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1079,
            "decorators": [],
            "name": "n4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1056,
              "end": 1079,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1058,
                "end": 1079,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1059,
                    "end": 1068,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1060,
                      "end": 1068,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1062,
                        "end": 1068
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1070,
                  "end": 1079,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1073,
                    "end": 1079
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1081,
      "end": 1089,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1081,
        "end": 1088,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1081,
          "end": 1083,
          "decorators": [],
          "name": "n4",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1086,
          "end": 1088,
          "decorators": [],
          "name": "z2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
