__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 56,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 54,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 54,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 30,
                  "end": 50,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 50,
                    "decorators": [],
                    "name": "flag",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 43,
                        "end": 50
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 58,
      "end": 117,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 81,
        "decorators": [],
        "name": "DiscriminatedUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 84,
        "end": 116,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 84,
            "end": 98,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 86,
                "end": 96,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 90,
                  "decorators": [],
                  "name": "flag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 92,
                    "end": 96,
                    "literal": {
                      "type": "Literal",
                      "start": 92,
                      "end": 96,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 101,
            "end": 116,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 103,
                "end": 114,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 107,
                  "decorators": [],
                  "name": "flag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 107,
                  "end": 114,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 109,
                    "end": 114,
                    "literal": {
                      "type": "Literal",
                      "start": 109,
                      "end": 114,
                      "raw": "false",
                      "value": false
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 118,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 194,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 173,
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
              "start": 173,
              "end": 194,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 194,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 174,
                  "end": 189,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 189,
                    "decorators": [],
                    "name": "model",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 186,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 188,
                        "end": 189,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 189,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 124,
        "end": 125,
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
        "start": 125,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 126,
            "end": 154,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 154,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 154,
                "decorators": [],
                "name": "DiscriminatedUnion",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
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
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 226,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 214,
        "end": 215,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 215,
        "end": 222,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 216,
            "end": 221,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 216,
              "end": 221,
              "decorators": [],
              "name": "Model",
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
