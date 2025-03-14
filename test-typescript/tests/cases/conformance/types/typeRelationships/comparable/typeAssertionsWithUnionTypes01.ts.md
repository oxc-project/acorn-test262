__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "p1",
              "optional": false
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
        "optional": false
      }
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "decorators": [],
              "name": "p2",
              "optional": false
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 90,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
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
                  "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 124,
                      "decorators": [],
                      "name": "I2",
                      "optional": false
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
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 139,
                  "decorators": [],
                  "name": "I1",
                  "optional": false
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
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 154,
            "end": 168,
            "expression": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 155,
              "end": 166,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 155,
                  "end": 161
                },
                {
                  "type": "TSTypeReference",
                  "start": 164,
                  "end": 166,
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 166,
                    "decorators": [],
                    "name": "I2",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 178,
            "end": 187,
            "expression": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 179,
              "end": 185
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 197,
            "end": 202,
            "expression": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 198,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 198,
                "end": 200,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 212,
            "end": 217,
            "expression": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 213,
              "end": 215,
              "typeName": {
                "type": "Identifier",
                "start": 213,
                "end": 215,
                "decorators": [],
                "name": "I1",
                "optional": false
              }
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
