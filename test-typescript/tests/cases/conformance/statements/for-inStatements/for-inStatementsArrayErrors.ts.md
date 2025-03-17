__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 13,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 7,
                  "end": 11,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 11,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "type": "ForInStatement",
      "start": 16,
      "end": 139,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 56,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 45,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 56,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "BinaryExpression",
                    "start": 50,
                    "end": 55,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 54,
                      "end": 55,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 62,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 68,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 71,
                  "end": 79,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "BinaryExpression",
                    "start": 73,
                    "end": 78,
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 85,
            "end": 105,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 98,
              "end": 105,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 89,
              "end": 96,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 95,
                "end": 96,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 110,
            "end": 137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 114,
                "end": 136,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 119,
                  "end": 136,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 136,
                    "decorators": [],
                    "name": "unknownProperty",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 26,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 154,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 148,
                "end": 154
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
      "type": "ForInStatement",
      "start": 156,
      "end": 177,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 177,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 161,
        "end": 166,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 165,
            "end": 166,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 189,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 189,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 186,
                "end": 189
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
      "type": "ForInStatement",
      "start": 191,
      "end": 212,
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 212,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 196,
        "end": 201,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 200,
            "end": 201,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
