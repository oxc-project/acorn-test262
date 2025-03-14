__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 40,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 40,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 27,
                    "end": 38,
                    "argument": {
                      "type": "Literal",
                      "start": 34,
                      "end": 38,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 21,
                "end": 24,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 23,
                  "end": 24,
                  "typeName": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "type": "TSInterfaceDeclaration",
      "start": 43,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 74,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 63,
            "end": 72,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 54,
        "end": 57,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 55,
            "end": 56,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
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
      "type": "VariableDeclaration",
      "start": 75,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 84,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 84,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "C",
                  "optional": false
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
      "start": 95,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 104,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "I",
                  "optional": false
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
      "start": 115,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 127,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 127,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 127,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 125,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "C",
                  "optional": false
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
      "start": 151,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 163,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 163,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 160,
                  "end": 163,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 161,
                      "end": 162,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
