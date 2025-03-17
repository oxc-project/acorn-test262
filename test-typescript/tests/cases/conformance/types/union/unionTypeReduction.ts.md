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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 50,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 30,
            "typeParameters": null,
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
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 35,
            "end": 48,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 84,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 71,
            "end": 82,
            "typeParameters": null,
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
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 96,
                  "name": "I2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 104,
            "name": "i3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "name": "I3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 107,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 122,
            "name": "e1",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 117,
                      "name": "I2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 120,
                    "end": 122,
                    "typeName": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 122,
                      "name": "I3",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 130,
            "name": "e2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 133,
            "end": 141,
            "left": {
              "type": "Identifier",
              "start": 133,
              "end": 135,
              "name": "i2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 139,
              "end": 141,
              "name": "i3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 198,
            "callee": {
              "type": "Identifier",
              "start": 194,
              "end": 196,
              "name": "e1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 272,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 275,
            "end": 279,
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 277,
              "name": "e2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
