__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "p1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 32,
                "end": 42,
                "name": "p2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  }
                },
                "decorators": [],
                "optional": false
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
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "p1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 92,
                    "end": 98
                  }
                },
                "decorators": [],
                "optional": true
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
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 117,
            "name": "i2",
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
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 128,
            "name": "c",
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
                  "name": "I1",
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
          "init": {
            "type": "MemberExpression",
            "start": 131,
            "end": 136,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "name": "i2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 136,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 163,
            "name": "d",
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
                  "name": "I1",
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
          "init": {
            "type": "MemberExpression",
            "start": 166,
            "end": 171,
            "object": {
              "type": "Identifier",
              "start": 166,
              "end": 168,
              "name": "i2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 171,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
