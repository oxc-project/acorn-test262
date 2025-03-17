__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 185,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 10,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 59,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 26,
            "end": 57,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 37,
                "name": "this",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 33,
                    "end": 37
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 39,
                "end": 49,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 43,
                    "end": 49
                  }
                },
                "decorators": [],
                "optional": true
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 111,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 76,
            "end": 109,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 89,
                "name": "this",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 83,
                    "end": 89
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 91,
                "end": 101,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 95,
                    "end": 101
                  }
                },
                "decorators": [],
                "optional": true
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 148,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 128,
            "end": 146,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 129,
                "end": 138,
                "name": "i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 130,
                  "end": 138,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 132,
                    "end": 138
                  }
                },
                "decorators": [],
                "optional": false
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
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 176,
            "name": "fn",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 171,
                    "end": 172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 176,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 184,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 183,
        "callee": {
          "type": "Identifier",
          "start": 178,
          "end": 180,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 181,
            "end": 182,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
