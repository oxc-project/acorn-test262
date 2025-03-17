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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 56,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 54,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "flag",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 43,
                        "end": 50
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 54,
                "body": []
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
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 58,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 81,
        "name": "DiscriminatedUnion",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 90,
                  "name": "flag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": true,
                      "raw": "true"
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
            "start": 101,
            "end": 116,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 103,
                "end": 114,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 107,
                  "name": "flag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 118,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 194,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 173,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 194,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "model",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 186,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 188,
                        "end": 189,
                        "typeName": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 189,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 194,
                "body": []
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
        "start": 125,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 126,
            "end": 154,
            "name": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 154,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 154,
                "name": "DiscriminatedUnion",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 214,
        "end": 215,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 226,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 215,
        "end": 222,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 216,
            "end": 221,
            "typeName": {
              "type": "Identifier",
              "start": 216,
              "end": 221,
              "name": "Model",
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
