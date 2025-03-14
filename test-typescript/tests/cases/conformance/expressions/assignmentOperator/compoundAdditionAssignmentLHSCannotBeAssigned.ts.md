__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 234,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 82,
      "end": 100,
      "body": {
        "type": "TSEnumBody",
        "start": 89,
        "end": 100,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 91,
            "end": 92,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 94,
            "end": 95,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 97,
            "end": 98,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 117,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 117,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 110,
                "end": 117
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
      "start": 119,
      "end": 128,
      "expression": {
        "type": "AssignmentExpression",
        "start": 119,
        "end": 127,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 119,
          "end": 121,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 125,
          "end": 127,
          "raw": "''",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 138,
                "end": 144
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
      "start": 146,
      "end": 155,
      "expression": {
        "type": "AssignmentExpression",
        "start": 146,
        "end": 154,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 146,
          "end": 148,
          "decorators": [],
          "name": "x2",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 152,
          "end": 154,
          "raw": "''",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 166,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "E",
                  "optional": false
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
      "start": 168,
      "end": 177,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 176,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 170,
          "decorators": [],
          "name": "x3",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 174,
          "end": 176,
          "raw": "''",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 198,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 198,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 198,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 187,
                "end": 198,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 188,
                    "end": 197,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 189,
                      "end": 197,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 191,
                        "end": 197
                      }
                    }
                  }
                ]
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
      "start": 200,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 200,
        "end": 208,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 200,
          "end": 202,
          "decorators": [],
          "name": "x4",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 206,
          "end": 208,
          "raw": "''",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 223,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 223,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 219,
                "end": 223
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
      "start": 225,
      "end": 234,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 233,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 225,
          "end": 227,
          "decorators": [],
          "name": "x5",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 231,
          "end": 233,
          "raw": "''",
          "value": ""
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
