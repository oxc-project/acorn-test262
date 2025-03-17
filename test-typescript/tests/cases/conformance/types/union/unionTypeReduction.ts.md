__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 281,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 50,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 30,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 35,
            "end": 48,
            "params": [
              {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 47,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 40,
                "end": 47
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
        "end": 12,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 84,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 84,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 71,
            "end": 82,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
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
        "start": 62,
        "end": 64,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 96,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 96,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 104,
            "decorators": [],
            "name": "i3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 104,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "decorators": [],
                  "name": "I3",
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
      "start": 107,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 122,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 122,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 115,
                "end": 122,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 117,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 117,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 122,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 122,
                      "decorators": [],
                      "name": "I3",
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 130,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 133,
            "end": 141,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 133,
              "end": 135,
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 139,
              "end": 141,
              "decorators": [],
              "name": "i3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 198,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 198,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 194,
              "end": 196,
              "decorators": [],
              "name": "e1",
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
      "start": 266,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 272,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 275,
            "end": 279,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 277,
              "decorators": [],
              "name": "e2",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
