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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "a",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 11,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
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
      "type": "ForInStatement",
      "start": 16,
      "end": 139,
      "left": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 26,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "x",
              "typeAnnotation": null,
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
      "right": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 45,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 56,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "BinaryExpression",
                    "start": 50,
                    "end": 55,
                    "left": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 54,
                      "end": 55,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 68,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 71,
                  "end": 79,
                  "object": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "BinaryExpression",
                    "start": 73,
                    "end": 78,
                    "left": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 85,
            "end": 105,
            "test": {
              "type": "BinaryExpression",
              "start": 89,
              "end": 96,
              "left": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 95,
                "end": 96,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 98,
              "end": 105,
              "body": []
            },
            "alternate": null
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
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "name": "a3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 119,
                  "end": 136,
                  "object": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 136,
                    "name": "unknownProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 154,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 148,
                "end": 154
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 156,
      "end": 177,
      "left": {
        "type": "VariableDeclaration",
        "start": 161,
        "end": 166,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 165,
            "end": 166,
            "id": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 177,
        "body": []
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
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 189,
            "name": "j",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 189,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 186,
                "end": 189
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 191,
      "end": 212,
      "left": {
        "type": "VariableDeclaration",
        "start": 196,
        "end": 201,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 200,
            "end": 201,
            "id": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 212,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
