__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 174,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 174,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 44,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 44,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 27,
                  "end": 40,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 40,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 40,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 39,
                        "end": 40,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 52,
              "decorators": [],
              "name": "good",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 104,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 72,
                "end": 104,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 80,
                    "end": 100,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 98,
                      "end": 100,
                      "body": []
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 84,
                      "end": 96,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 90,
                        "end": 96,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 90,
                          "end": 94
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 70,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 69,
                      "end": 70,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 52,
                "end": 65,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 64,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 63,
                      "end": 64,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 172,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "decorators": [],
              "name": "bad",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 172,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 172,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 148,
                    "end": 168,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 166,
                      "end": 168,
                      "body": []
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 152,
                      "end": 164,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 153,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 158,
                        "end": 164,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 158,
                          "end": 162
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 164,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 134,
                  "end": 138,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 138,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 111,
                "end": 133,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 112,
                    "end": 132,
                    "const": false,
                    "constraint": {
                      "type": "TSUnionType",
                      "start": 122,
                      "end": 132,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 122,
                          "end": 123,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 123,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 126,
                          "end": 132
                        }
                      ]
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
