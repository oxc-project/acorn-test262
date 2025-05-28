__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "isFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
          "parameterName": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
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
                    "value": "foo",
                    "raw": "\"foo\""
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
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 66,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 89,
        "decorators": [],
        "name": "doThis",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                    "value": "foo",
                    "raw": "\"foo\""
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
                    "value": "bar",
                    "raw": "\"bar\""
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 119,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 142,
        "decorators": [],
        "name": "doThat",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 184,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 183,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 185,
      "end": 253,
      "test": {
        "type": "CallExpression",
        "start": 189,
        "end": 201,
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 194,
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 195,
            "end": 200,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
              "callee": {
                "type": "Identifier",
                "start": 209,
                "end": 215,
                "decorators": [],
                "name": "doThis",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 216,
                  "end": 221,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
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
              "callee": {
                "type": "Identifier",
                "start": 237,
                "end": 243,
                "decorators": [],
                "name": "doThat",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 244,
                  "end": 249,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
