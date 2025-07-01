__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 16
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 15,
              "end": 22
            }
          ],
          "start": 14,
          "end": 23
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ShadowedButDoesNotRequireRenaming",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 77
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 82
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 81,
                      "end": 82
                    }
                  ],
                  "start": 80,
                  "end": 83
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 88
                    },
                    "typeArguments": null,
                    "start": 87,
                    "end": 88
                  },
                  "start": 85,
                  "end": 88
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 107,
                          "end": 111
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 115,
                          "end": 118
                        },
                        "start": 107,
                        "end": 118
                      },
                      "start": 100,
                      "end": 118
                    }
                  ],
                  "start": 92,
                  "end": 122
                },
                "id": null,
                "generator": false,
                "start": 80,
                "end": 122
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "public",
              "start": 28,
              "end": 122
            }
          ],
          "start": 24,
          "end": 124
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 124
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 124
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "needsRenameForShadowing",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 165
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 166,
              "end": 167
            }
          ],
          "start": 165,
          "end": 168
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 185
                },
                "typeArguments": null,
                "start": 184,
                "end": 185
              },
              "declare": false,
              "start": 175,
              "end": 185
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 207
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 206,
                      "end": 207
                    }
                  ],
                  "start": 205,
                  "end": 208
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 213
                        },
                        "typeArguments": null,
                        "start": 212,
                        "end": 213
                      },
                      "start": 210,
                      "end": 213
                    },
                    "start": 209,
                    "end": 213
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 220
                        },
                        "typeArguments": null,
                        "start": 219,
                        "end": 220
                      },
                      "start": 217,
                      "end": 220
                    },
                    "start": 215,
                    "end": 220
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 222,
                  "end": 227
                },
                "expression": false,
                "start": 195,
                "end": 227
              },
              "start": 188,
              "end": 227
            }
          ],
          "start": 171,
          "end": 229
        },
        "expression": false,
        "start": 133,
        "end": 229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 126,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
