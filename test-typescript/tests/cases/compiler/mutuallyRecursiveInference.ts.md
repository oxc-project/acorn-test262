__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 33,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              }
            },
            "value": null
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
        "name": "T",
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "m",
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
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 124,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 122,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 122,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 116,
                        "end": 120
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 90,
        "end": 103,
        "params": [
          {
            "type": "TSIndexedAccessType",
            "start": 91,
            "end": 102,
            "indexType": {
              "type": "TSIndexedAccessType",
              "start": 94,
              "end": 101,
              "indexType": {
                "type": "TSLiteralType",
                "start": 97,
                "end": 100,
                "literal": {
                  "type": "Literal",
                  "start": 97,
                  "end": 100,
                  "raw": "'a'",
                  "value": "a"
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 96,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 96,
                  "decorators": [],
                  "name": "RT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 93,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 93,
                "decorators": [],
                "name": "RT",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 79,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 55,
              "end": 79,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 57,
                  "end": 70,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 60,
                      "end": 69,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 60,
                          "end": 63,
                          "literal": {
                            "type": "Literal",
                            "start": 60,
                            "end": 63,
                            "raw": "'a'",
                            "value": "a"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 66,
                          "end": 69,
                          "literal": {
                            "type": "Literal",
                            "start": 66,
                            "end": 69,
                            "raw": "'b'",
                            "value": "b"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 71,
                  "end": 77,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 74,
                      "end": 77
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "decorators": [],
              "name": "RT",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 127,
      "end": 214,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 214,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 166,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 166,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 157,
                "end": 166,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 157,
                    "end": 160,
                    "literal": {
                      "type": "Literal",
                      "start": 157,
                      "end": 160,
                      "raw": "'a'",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 163,
                    "end": 166,
                    "literal": {
                      "type": "Literal",
                      "start": 163,
                      "end": 166,
                      "raw": "'b'",
                      "value": "b"
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 171,
            "end": 180,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 174,
                "end": 180
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 212,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 187,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 212,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 212,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 200,
                    "end": 206,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 200,
                      "end": 206,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 200,
                        "end": 204
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 143,
        "end": 144,
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 145,
            "end": 146,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
