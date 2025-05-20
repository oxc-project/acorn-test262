__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 124,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 124,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 124,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 28,
              "end": 122,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 77,
                "decorators": [],
                "name": "ShadowedButDoesNotRequireRenaming",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 80,
                "end": 122,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 92,
                  "end": 122,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 100,
                      "end": 118,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 107,
                        "end": 118,
                        "expression": {
                          "type": "Literal",
                          "start": 107,
                          "end": 111,
                          "raw": "null",
                          "value": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 115,
                          "end": 118
                        }
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 88,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 87,
                    "end": 88,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 80,
                  "end": 83,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 81,
                      "end": 82,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
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
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 14,
          "end": 23,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 15,
              "end": 22,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 229,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 133,
        "end": 229,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 171,
          "end": 229,
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "start": 175,
              "end": 185,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 184,
                "end": 185,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 185,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeParameters": null
            },
            {
              "type": "ReturnStatement",
              "start": 188,
              "end": 227,
              "argument": {
                "type": "FunctionExpression",
                "start": 195,
                "end": 227,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 222,
                  "end": 227,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 209,
                    "end": 213,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 210,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 212,
                        "end": 213,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 213,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 215,
                    "end": 220,
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 217,
                      "end": 220,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 219,
                        "end": 220,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 220,
                          "decorators": [],
                          "name": "T",
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
                  "start": 205,
                  "end": 208,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 206,
                      "end": 207,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 207,
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
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 142,
          "end": 165,
          "decorators": [],
          "name": "needsRenameForShadowing",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 165,
          "end": 168,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 166,
              "end": 167,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
