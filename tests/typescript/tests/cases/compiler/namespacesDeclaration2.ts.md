__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 35,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 18,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 33,
              "body": []
            },
            "expression": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 36,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 68,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 51,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 64,
              "end": 66,
              "body": []
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 70,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 90,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 91,
        "end": 113,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 111,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 110,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 110,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 104,
                      "end": 110
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 129,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "decorators": [],
            "name": "foge",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 128,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 125,
                  "end": 128,
                  "left": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 130,
      "end": 143,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 142,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 142,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 139,
                  "end": 142,
                  "left": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 144,
      "end": 156,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 155,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 155,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 151,
                  "end": 155,
                  "left": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 153,
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
