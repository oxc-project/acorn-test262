__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 40,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 30,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 30,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 39,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 33,
          "end": 39
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 41,
      "end": 155,
      "body": {
        "type": "TSModuleBlock",
        "start": 58,
        "end": 155,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 64,
            "end": 113,
            "body": {
              "type": "TSInterfaceBody",
              "start": 85,
              "end": 113,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 95,
                  "end": 107,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 100,
                      "end": 106
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "decorators": [],
              "name": "Promise",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 81,
              "end": 84,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 82,
                  "end": 83,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 118,
            "end": 153,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 125,
              "end": 153,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 134,
                "end": 139,
                "decorators": [],
                "name": "defer",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 144,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 146,
                  "end": 152
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 139,
                "end": 142,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 140,
                    "end": 141,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 118,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 118,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 65,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 69,
                "end": 92,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 77,
                  "decorators": [],
                  "name": "deferred",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 80,
                  "end": 92,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 80,
                    "end": 87,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "decorators": [],
                      "name": "Q",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 87,
                      "decorators": [],
                      "name": "defer",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 87,
                    "end": 90,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 88,
                        "end": 89,
                        "typeName": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 32,
        "decorators": [],
        "name": "promiseWithCancellation",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 36,
          "end": 57,
          "decorators": [],
          "name": "promise",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 57,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 45,
              "end": 57,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 54,
                "end": 57,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 55,
                    "end": 56,
                    "typeName": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "TSQualifiedName",
                "start": 45,
                "end": 54,
                "left": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "Q",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 54,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
