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
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 35,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 18,
            "end": 33,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 33,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 36,
      "end": 68,
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 68,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 51,
            "end": 66,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 64,
              "end": 66,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "F",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 70,
      "end": 113,
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 90,
        "decorators": [],
        "name": "ns",
        "optional": false
      },
      "kind": "namespace"
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
          "definite": false,
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  }
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
      "start": 130,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 142,
          "definite": false,
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "F",
                    "optional": false
                  }
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
      "start": 144,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 155,
          "definite": false,
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
