__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 75,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 75,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 16,
          "end": 74,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 16,
              "end": 41,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 18,
                  "end": 29,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 22,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 25,
                      "end": 28,
                      "literal": {
                        "type": "Literal",
                        "start": 25,
                        "end": 28,
                        "value": "A",
                        "raw": "'A'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 30,
                  "end": 39,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 33,
                      "end": 39
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSIntersectionType",
              "start": 44,
              "end": 74,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 44,
                  "end": 58,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 46,
                      "end": 56,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 50,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 51,
                        "end": 56,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 53,
                          "end": 56,
                          "literal": {
                            "type": "Literal",
                            "start": 53,
                            "end": 56,
                            "value": "B",
                            "raw": "'B'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 61,
                  "end": 74,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 63,
                      "end": 72,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 64,
                        "end": 72,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 66,
                          "end": 72
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 76,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 83,
        "decorators": [],
        "name": "Ex",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 87,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 92,
        "end": 115,
        "checkType": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 93,
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 103,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 106,
          "end": 107,
          "typeName": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 110,
          "end": 115
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 153,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 153,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 153,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 134,
                  "decorators": [],
                  "name": "Ex",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 134,
                  "end": 153,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 138,
                      "end": 152,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 140,
                          "end": 150,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 144,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 145,
                            "end": 150,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 147,
                              "end": 150,
                              "literal": {
                                "type": "Literal",
                                "start": 147,
                                "end": 150,
                                "value": "A",
                                "raw": "'A'"
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 157,
      "expression": {
        "type": "MemberExpression",
        "start": 154,
        "end": 157,
        "object": {
          "type": "Identifier",
          "start": 154,
          "end": 155,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
