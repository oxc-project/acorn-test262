__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 114,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 114,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 37,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 24,
                    "end": 27,
                    "literal": {
                      "type": "Literal",
                      "start": 24,
                      "end": 27,
                      "raw": "'a'",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 42,
            "end": 59,
            "params": [
              {
                "type": "Identifier",
                "start": 43,
                "end": 52,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 58,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 65,
            "end": 83,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 76,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 73,
                    "end": 76,
                    "literal": {
                      "type": "Literal",
                      "start": 73,
                      "end": 76,
                      "raw": "'a'",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 82,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 79,
                "end": 82
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 88,
            "end": 112,
            "params": [
              {
                "type": "Identifier",
                "start": 93,
                "end": 102,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 94,
                  "end": 102,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 96,
                    "end": 102
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 111,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 111,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 126,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 126,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 126,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 126,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 128,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 136,
            "end": 142,
            "arguments": [
              {
                "type": "Literal",
                "start": 138,
                "end": 141,
                "raw": "'a'",
                "value": "a",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 150,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 153,
            "end": 159,
            "arguments": [
              {
                "type": "Literal",
                "start": 155,
                "end": 158,
                "raw": "'A'",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 170,
            "end": 180,
            "arguments": [
              {
                "type": "Literal",
                "start": 176,
                "end": 179,
                "raw": "'a'",
                "value": "a",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 191,
            "end": 201,
            "arguments": [
              {
                "type": "Literal",
                "start": 197,
                "end": 200,
                "raw": "'A'",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
