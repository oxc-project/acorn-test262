__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 52,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 50,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 30,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 32,
                "end": 42,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 49,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 45,
                "end": 49
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 79,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 78,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 84,
            "end": 104,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 86,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 98,
                "decorators": [],
                "name": "p1",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 92,
                    "end": 98
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 103,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 118,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 117,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 117,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 128,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 128,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 128,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 131,
            "end": 136,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 136,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 172,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 163,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 166,
            "end": 171,
            "object": {
              "type": "Identifier",
              "start": 166,
              "end": 168,
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 171,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
