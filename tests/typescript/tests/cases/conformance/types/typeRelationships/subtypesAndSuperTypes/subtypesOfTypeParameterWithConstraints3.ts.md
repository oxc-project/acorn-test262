__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 325,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 82,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 92,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 104,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 110,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 112,
          "end": 116,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 115,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 118,
          "end": 122,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 124,
          "end": 128,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 128,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 325,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 146,
            "end": 167,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 150,
                "end": 166,
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 154,
                  "end": 166,
                  "test": {
                    "type": "Literal",
                    "start": 154,
                    "end": 158,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 172,
            "end": 193,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 176,
                "end": 192,
                "id": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 180,
                  "end": 192,
                  "test": {
                    "type": "Literal",
                    "start": 180,
                    "end": 184,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 188,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 209,
            "end": 231,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 213,
                "end": 230,
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 215,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 218,
                  "end": 230,
                  "test": {
                    "type": "Literal",
                    "start": 218,
                    "end": 222,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 236,
            "end": 258,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 240,
                "end": 257,
                "id": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 245,
                  "end": 257,
                  "test": {
                    "type": "Literal",
                    "start": 245,
                    "end": 249,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 257,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 274,
            "end": 296,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 278,
                "end": 295,
                "id": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 280,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 283,
                  "end": 295,
                  "test": {
                    "type": "Literal",
                    "start": 283,
                    "end": 287,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 301,
            "end": 323,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 305,
                "end": 322,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 307,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 310,
                  "end": 322,
                  "test": {
                    "type": "Literal",
                    "start": 310,
                    "end": 314,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 318,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
