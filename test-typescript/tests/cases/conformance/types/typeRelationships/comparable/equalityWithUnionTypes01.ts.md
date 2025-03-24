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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 54,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 54,
            "end": 56,
            "name": "I1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 76,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 74,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 90,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 94,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 96,
                "end": 102,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 98,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 100,
                  "end": 102,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 124,
            "name": "y",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 124,
                      "name": "I2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 139,
                  "name": "I1",
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
          "init": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 146,
      "end": 268,
      "test": {
        "type": "LogicalExpression",
        "start": 150,
        "end": 168,
        "left": {
          "type": "BinaryExpression",
          "start": 150,
          "end": 157,
          "left": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 161,
          "end": 168,
          "left": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 170,
        "end": 173,
        "body": []
      },
      "alternate": {
        "type": "IfStatement",
        "start": 179,
        "end": 268,
        "test": {
          "type": "LogicalExpression",
          "start": 183,
          "end": 201,
          "left": {
            "type": "BinaryExpression",
            "start": 183,
            "end": 190,
            "left": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "start": 194,
            "end": 201,
            "left": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 203,
          "end": 206,
          "body": []
        },
        "alternate": {
          "type": "IfStatement",
          "start": 212,
          "end": 268,
          "test": {
            "type": "LogicalExpression",
            "start": 216,
            "end": 232,
            "left": {
              "type": "BinaryExpression",
              "start": 216,
              "end": 222,
              "left": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "||",
            "right": {
              "type": "BinaryExpression",
              "start": 226,
              "end": 232,
              "left": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 234,
            "end": 237,
            "body": []
          },
          "alternate": {
            "type": "IfStatement",
            "start": 243,
            "end": 268,
            "test": {
              "type": "LogicalExpression",
              "start": 247,
              "end": 263,
              "left": {
                "type": "BinaryExpression",
                "start": 247,
                "end": 253,
                "left": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "!=",
                "right": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 257,
                "end": 263,
                "left": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "!=",
                "right": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 265,
              "end": 268,
              "body": []
            },
            "alternate": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
