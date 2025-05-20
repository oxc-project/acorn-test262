__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 268,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 76,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 76,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 74,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 54,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 54,
            "end": 56,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 86,
            "end": 104,
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 94,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 90,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 94,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 96,
                "end": 102,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 98,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 100,
                  "end": 102,
                  "raw": "20",
                  "value": 20
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
      "start": 106,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 124,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 124,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 113,
                "end": 124,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 113,
                    "end": 119
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 124,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 124,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 139,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 139,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 146,
      "end": 268,
      "alternate": {
        "type": "IfStatement",
        "start": 179,
        "end": 268,
        "alternate": {
          "type": "IfStatement",
          "start": 212,
          "end": 268,
          "alternate": {
            "type": "IfStatement",
            "start": 243,
            "end": 268,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 265,
              "end": 268,
              "body": []
            },
            "test": {
              "type": "LogicalExpression",
              "start": 247,
              "end": 263,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 247,
                "end": 253,
                "operator": "!=",
                "left": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 257,
                "end": 263,
                "operator": "!=",
                "left": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 234,
            "end": 237,
            "body": []
          },
          "test": {
            "type": "LogicalExpression",
            "start": 216,
            "end": 232,
            "operator": "||",
            "left": {
              "type": "BinaryExpression",
              "start": 216,
              "end": 222,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "BinaryExpression",
              "start": 226,
              "end": 232,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 203,
          "end": 206,
          "body": []
        },
        "test": {
          "type": "LogicalExpression",
          "start": 183,
          "end": 201,
          "operator": "||",
          "left": {
            "type": "BinaryExpression",
            "start": 183,
            "end": 190,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "BinaryExpression",
            "start": 194,
            "end": 201,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 170,
        "end": 173,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 150,
        "end": 168,
        "operator": "||",
        "left": {
          "type": "BinaryExpression",
          "start": 150,
          "end": 157,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 161,
          "end": 168,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
