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
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 33,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 64,
              "end": 66,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
        "name": "ns",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 110,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 110,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 104,
                      "end": 110
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "name": "foge",
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
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 130,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 142,
            "name": "foo",
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
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 144,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 155,
            "name": "x",
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
                    "name": "ns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
