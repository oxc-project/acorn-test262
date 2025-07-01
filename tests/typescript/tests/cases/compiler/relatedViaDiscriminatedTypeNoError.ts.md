__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 29
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flag",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 43,
                        "end": 50
                      },
                      "start": 41,
                      "end": 50
                    },
                    "start": 37,
                    "end": 50
                  },
                  "readonly": false,
                  "static": false,
                  "start": 30,
                  "end": 50
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 52,
                "end": 54
              },
              "expression": false,
              "start": 29,
              "end": 54
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 54
          }
        ],
        "start": 12,
        "end": 56
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 90
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 92,
                      "end": 96
                    },
                    "start": 92,
                    "end": 96
                  },
                  "start": 90,
                  "end": 96
                },
                "accessibility": null,
                "static": false,
                "start": 86,
                "end": 96
              }
            ],
            "start": 84,
            "end": 98
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 107
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 109,
                      "end": 114
                    },
                    "start": 109,
                    "end": 114
                  },
                  "start": 107,
                  "end": 114
                },
                "accessibility": null,
                "static": false,
                "start": 103,
                "end": 114
              }
            ],
            "start": 101,
            "end": 116
          }
        ],
        "start": 84,
        "end": 116
      },
      "declare": false,
      "start": 58,
      "end": 117
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 125
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
              "start": 126,
              "end": 127
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DiscriminatedUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 154
              },
              "typeArguments": null,
              "start": 136,
              "end": 154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 126,
            "end": 154
          }
        ],
        "start": 125,
        "end": 155
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 173
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "model",
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
                          "start": 188,
                          "end": 189
                        },
                        "typeArguments": null,
                        "start": 188,
                        "end": 189
                      },
                      "start": 186,
                      "end": 189
                    },
                    "start": 181,
                    "end": 189
                  },
                  "readonly": false,
                  "static": false,
                  "start": 174,
                  "end": 189
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 191,
                "end": 194
              },
              "expression": false,
              "start": 173,
              "end": 194
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 162,
            "end": 194
          }
        ],
        "start": 156,
        "end": 196
      },
      "abstract": false,
      "declare": false,
      "start": 118,
      "end": 196
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 205
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 215
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Model",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 221
            },
            "typeArguments": null,
            "start": 216,
            "end": 221
          }
        ],
        "start": 215,
        "end": 222
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 223,
        "end": 226
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
