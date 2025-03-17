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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 30,
          "name": "value",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 39,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 33,
          "end": 39
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 41,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 58,
        "end": 155,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 64,
            "end": 113,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 81,
              "end": 84,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 82,
                  "end": 83,
                  "name": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 100,
                      "end": 106
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
            "type": "ExportNamedDeclaration",
            "start": 118,
            "end": 153,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 125,
              "end": 153,
              "id": {
                "type": "Identifier",
                "start": 134,
                "end": 139,
                "name": "defer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 139,
                "end": 142,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 140,
                    "end": 141,
                    "name": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 144,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 146,
                  "end": 152
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 32,
        "name": "promiseWithCancellation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 36,
          "end": 57,
          "name": "promise",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 57,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 45,
              "end": 57,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 45,
                "end": 54,
                "left": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 54,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 77,
                  "name": "deferred",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 80,
                  "end": 92,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 80,
                    "end": 87,
                    "object": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "name": "Q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 87,
                      "name": "defer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
