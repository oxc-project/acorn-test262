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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 33,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "A",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "L",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 124,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 124,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 122,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 122,
                      "object": {
                        "type": "ThisExpression",
                        "start": 116,
                        "end": 120
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 79,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "name": "RT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 55,
              "end": 79,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 57,
                  "end": 70,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "value": "a",
                            "raw": "'a'"
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
                            "value": "b",
                            "raw": "'b'"
                          }
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 71,
                  "end": 77,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 74,
                      "end": 77
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 90,
        "end": 103,
        "params": [
          {
            "type": "TSIndexedAccessType",
            "start": 91,
            "end": 102,
            "objectType": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 93,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 93,
                "name": "RT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSIndexedAccessType",
              "start": 94,
              "end": 101,
              "objectType": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 96,
                  "name": "RT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 97,
                "end": 100,
                "literal": {
                  "type": "Literal",
                  "start": 97,
                  "end": 100,
                  "value": "a",
                  "raw": "'a'"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 127,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 143,
        "end": 144,
        "name": "L",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 214,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                      "value": "a",
                      "raw": "'a'"
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
                      "value": "b",
                      "raw": "'b'"
                    }
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 171,
            "end": 180,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 212,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 187,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 212,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 212,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 200,
                    "end": 206,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 200,
                      "end": 206,
                      "object": {
                        "type": "ThisExpression",
                        "start": 200,
                        "end": 204
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 145,
            "end": 146,
            "typeName": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
