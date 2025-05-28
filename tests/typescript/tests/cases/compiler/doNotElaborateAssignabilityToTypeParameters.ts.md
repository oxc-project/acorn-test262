__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 26,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 26,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 25,
              "end": 26,
              "typeName": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 39,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 29,
          "end": 39,
          "typeName": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 36,
            "end": 39,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 80,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 79,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 56,
                  "decorators": [],
                  "name": "yaddable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 59,
                  "end": 79,
                  "argument": {
                    "type": "CallExpression",
                    "start": 65,
                    "end": 79,
                    "callee": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 76,
                      "decorators": [],
                      "name": "getXOrYadda",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 83,
            "end": 99,
            "argument": {
              "type": "Identifier",
              "start": 90,
              "end": 98,
              "decorators": [],
              "name": "yaddable",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 103,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 118,
        "decorators": [],
        "name": "Yadda",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 157,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 123,
            "end": 137,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 128,
              "decorators": [],
              "name": "stuff",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 155,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 146,
              "decorators": [],
              "name": "things",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 148,
                "end": 154
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 159,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 187,
        "decorators": [],
        "name": "getXOrYadda",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 187,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 191,
          "end": 195,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 192,
            "end": 195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 194,
              "end": 195,
              "typeName": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 196,
        "end": 207,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 198,
          "end": 207,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 198,
              "end": 199,
              "typeName": {
                "type": "Identifier",
                "start": 198,
                "end": 199,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 202,
              "end": 207,
              "typeName": {
                "type": "Identifier",
                "start": 202,
                "end": 207,
                "decorators": [],
                "name": "Yadda",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
