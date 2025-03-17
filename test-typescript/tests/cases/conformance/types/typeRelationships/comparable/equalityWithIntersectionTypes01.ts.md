__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 306,
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
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 90,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 108,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 101,
                "end": 107
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
      "start": 112,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 120,
            "end": 146,
            "properties": [
              {
                "type": "Property",
                "start": 122,
                "end": 128,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 124,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 126,
                  "end": 128,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 130,
                "end": 136,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 132,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 136,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 138,
                "end": 144,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 140,
                  "name": "p3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 144,
                  "value": 30,
                  "raw": "30"
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
      "start": 148,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 162,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 162,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 155,
                "end": 162,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 155,
                    "end": 157,
                    "typeName": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 157,
                      "name": "I1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 160,
                    "end": 162,
                    "typeName": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 162,
                      "name": "I3",
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
            "start": 165,
            "end": 166,
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
      "start": 168,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 177,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 177,
                  "name": "I2",
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
            "start": 180,
            "end": 181,
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
      "start": 184,
      "end": 306,
      "test": {
        "type": "LogicalExpression",
        "start": 188,
        "end": 206,
        "left": {
          "type": "BinaryExpression",
          "start": 188,
          "end": 195,
          "left": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 199,
          "end": 206,
          "left": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 208,
        "end": 211,
        "body": []
      },
      "alternate": {
        "type": "IfStatement",
        "start": 217,
        "end": 306,
        "test": {
          "type": "LogicalExpression",
          "start": 221,
          "end": 239,
          "left": {
            "type": "BinaryExpression",
            "start": 221,
            "end": 228,
            "left": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "start": 232,
            "end": 239,
            "left": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 241,
          "end": 244,
          "body": []
        },
        "alternate": {
          "type": "IfStatement",
          "start": 250,
          "end": 306,
          "test": {
            "type": "LogicalExpression",
            "start": 254,
            "end": 270,
            "left": {
              "type": "BinaryExpression",
              "start": 254,
              "end": 260,
              "left": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "||",
            "right": {
              "type": "BinaryExpression",
              "start": 264,
              "end": 270,
              "left": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 272,
            "end": 275,
            "body": []
          },
          "alternate": {
            "type": "IfStatement",
            "start": 281,
            "end": 306,
            "test": {
              "type": "LogicalExpression",
              "start": 285,
              "end": 301,
              "left": {
                "type": "BinaryExpression",
                "start": 285,
                "end": 291,
                "left": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "!=",
                "right": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 295,
                "end": 301,
                "left": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "!=",
                "right": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 301,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 303,
              "end": 306,
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
