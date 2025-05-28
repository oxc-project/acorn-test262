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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 124,
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 14,
          "end": 23,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 15,
              "end": 22,
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 124,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 28,
              "end": 122,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 77,
                "decorators": [],
                "name": "ShadowedButDoesNotRequireRenaming",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 80,
                "end": 122,
                "expression": false,
                "async": false,
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
                  "start": 85,
                  "end": 88,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 87,
                    "end": 88,
                    "typeName": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
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
                          "value": null,
                          "raw": "null"
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
                "id": null,
                "generator": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 229,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 133,
        "end": 229,
        "id": {
          "type": "Identifier",
          "start": 142,
          "end": 165,
          "decorators": [],
          "name": "needsRenameForShadowing",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 165,
          "end": 168,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 166,
              "end": 167,
              "name": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
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
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 171,
          "end": 229,
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "start": 175,
              "end": 185,
              "id": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 184,
                "end": 185,
                "typeName": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 185,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 188,
              "end": 227,
              "argument": {
                "type": "FunctionExpression",
                "start": 195,
                "end": 227,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 205,
                  "end": 208,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 206,
                      "end": 207,
                      "name": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 207,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 213,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 220,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 222,
                  "end": 227,
                  "body": []
                },
                "expression": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
