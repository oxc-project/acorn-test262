__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 184,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 10,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 59,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 26,
            "end": 57,
            "params": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 37,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 33,
                    "end": 37
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 39,
                "end": 49,
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 43,
                    "end": 49
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 56,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 52,
                "end": 56
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
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 111,
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 111,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 76,
            "end": 109,
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 89,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 83,
                    "end": 89
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 91,
                "end": 101,
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 95,
                    "end": 101
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 108,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 104,
                "end": 108
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
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 148,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 148,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 128,
            "end": 146,
            "params": [
              {
                "type": "Identifier",
                "start": 129,
                "end": 138,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 130,
                  "end": 138,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 132,
                    "end": 138
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 145,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 141,
                "end": 145
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
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 176,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 176,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 167,
                "end": 176,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 167,
                    "end": 168,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 171,
                    "end": 172,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 176,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 184,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 183,
        "arguments": [
          {
            "type": "Literal",
            "start": 181,
            "end": 182,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 180,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
