__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 188,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 30,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 47,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 49,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 61,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 82,
        "decorators": [],
        "name": "lift",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "U",
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
          "start": 86,
          "end": 103,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 103,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 93,
              "end": 103,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 93,
                  "end": 94,
                  "typeName": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 97,
                  "end": 103,
                  "typeName": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 100,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 100,
                    "end": 103,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 101,
                        "end": 102,
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 104,
        "end": 112,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 106,
          "end": 112,
          "typeName": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 109,
            "end": 112,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 110,
                "end": 111,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 130,
        "decorators": [],
        "name": "unlift",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 130,
        "end": 133,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 132,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "U",
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
          "start": 134,
          "end": 151,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 151,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 141,
              "end": 151,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 141,
                  "end": 142,
                  "typeName": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 145,
                  "end": 151,
                  "typeName": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 148,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 148,
                    "end": 151,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 149,
                        "end": 150,
                        "typeName": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 152,
        "end": 155,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 154,
          "end": 155,
          "typeName": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 156,
        "end": 188,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 162,
            "end": 186,
            "argument": {
              "type": "MemberExpression",
              "start": 169,
              "end": 185,
              "object": {
                "type": "CallExpression",
                "start": 169,
                "end": 180,
                "callee": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 173,
                  "decorators": [],
                  "name": "lift",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 174,
                    "end": 179,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 185,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
