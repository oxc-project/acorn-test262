__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 28,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 11,
                    "end": 26,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11,
                      "end": 13,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 14,
                      "end": 26,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 16,
                        "end": 26,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 16,
                          "end": 19,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 17,
                              "end": 18,
                              "name": {
                                "type": "Identifier",
                                "start": 17,
                                "end": 18,
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
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 22,
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 31,
            "end": 33,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 63,
      "expression": {
        "type": "AssignmentExpression",
        "start": 35,
        "end": 62,
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "start": 35,
          "end": 49,
          "expression": {
            "type": "MemberExpression",
            "start": 35,
            "end": 41,
            "object": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 41,
            "end": 49,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              }
            ]
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 52,
          "end": 62,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 58,
            "end": 62,
            "value": 1234,
            "raw": "1234"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 91,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 90,
            "decorators": [],
            "name": "getValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 90,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 80,
                "end": 90,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 80,
                  "end": 83,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 81,
                      "end": 82,
                      "name": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
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
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 86,
                  "end": 90,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 89,
                    "end": 90,
                    "typeName": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "ExpressionStatement",
      "start": 92,
      "end": 122,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 121,
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "start": 92,
          "end": 108,
          "expression": {
            "type": "Identifier",
            "start": 92,
            "end": 100,
            "decorators": [],
            "name": "getValue",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 100,
            "end": 108,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 101,
                "end": 107
              }
            ]
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 111,
          "end": 121,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 117,
            "end": 121,
            "value": 1234,
            "raw": "1234"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 152,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 151,
            "decorators": [],
            "name": "getValue2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 151,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 141,
                "end": 151,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 141,
                  "end": 144,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 142,
                      "end": 143,
                      "name": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
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
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 147,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": true
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 184,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 183,
        "operator": "=",
        "left": {
          "type": "TSInstantiationExpression",
          "start": 153,
          "end": 170,
          "expression": {
            "type": "Identifier",
            "start": 153,
            "end": 162,
            "decorators": [],
            "name": "getValue2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 162,
            "end": 170,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 163,
                "end": 169
              }
            ]
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 173,
          "end": 183,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "start": 179,
            "end": 183,
            "value": 1234,
            "raw": "1234"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
