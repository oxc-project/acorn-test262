__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 65,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "isFoo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 36,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 36,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 30,
              "end": 36
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 64,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 40,
          "end": 64,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "value",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 63,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 50,
              "end": 63,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 50,
                  "end": 55,
                  "literal": {
                    "type": "Literal",
                    "start": 50,
                    "end": 55,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 58,
                  "end": 63,
                  "literal": {
                    "type": "Literal",
                    "start": 58,
                    "end": 63,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 66,
      "end": 118,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 89,
        "decorators": [],
        "name": "doThis",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 110,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 95,
            "end": 110,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 97,
              "end": 110,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 97,
                  "end": 102,
                  "literal": {
                    "type": "Literal",
                    "start": 97,
                    "end": 102,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 105,
                  "end": 110,
                  "literal": {
                    "type": "Literal",
                    "start": 105,
                    "end": 110,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 111,
        "end": 117,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 113,
          "end": 117
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 119,
      "end": 165,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 142,
        "decorators": [],
        "name": "doThat",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 143,
          "end": 156,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 156,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 150,
              "end": 156
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 158,
        "end": 164,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 160,
          "end": 164
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 183,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
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
      "type": "IfStatement",
      "start": 185,
      "end": 253,
      "alternate": {
        "type": "BlockStatement",
        "start": 231,
        "end": 253,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 237,
            "end": 251,
            "expression": {
              "type": "CallExpression",
              "start": 237,
              "end": 250,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 244,
                  "end": 249,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 237,
                "end": 243,
                "decorators": [],
                "name": "doThat",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 203,
        "end": 225,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 209,
            "end": 223,
            "expression": {
              "type": "CallExpression",
              "start": 209,
              "end": 222,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 216,
                  "end": 221,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 209,
                "end": 215,
                "decorators": [],
                "name": "doThis",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 189,
        "end": 201,
        "arguments": [
          {
            "type": "Identifier",
            "start": 195,
            "end": 200,
            "decorators": [],
            "name": "value",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 194,
          "decorators": [],
          "name": "isFoo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
