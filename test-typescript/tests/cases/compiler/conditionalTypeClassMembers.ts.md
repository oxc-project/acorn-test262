__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 22,
        "name": "MyRecord",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 38,
              "end": 41,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 59,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 47,
              "end": 59,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 51,
                  "end": 58
                }
              }
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 82,
        "name": "MySet",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 112,
            "end": 132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 123,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 123,
              "end": 132,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 125,
                "end": 131,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 127,
                  "end": 131,
                  "typeName": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 131,
                    "name": "TSet",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 104,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "name": "TSet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 104,
                "name": "MyRecord",
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "name": "DS",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 143,
        "end": 195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 144,
            "end": 194,
            "name": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "name": "TRec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 157,
              "end": 194,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 157,
                  "end": 165,
                  "typeName": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 165,
                    "name": "MyRecord",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 168,
                  "end": 194,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 170,
                      "end": 192,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 171,
                          "end": 182,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 174,
                            "end": 182,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 176,
                              "end": 182
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 183,
                        "end": 192,
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 185,
                          "end": 192
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 198,
        "end": 242,
        "checkType": {
          "type": "TSTypeReference",
          "start": 198,
          "end": 202,
          "typeName": {
            "type": "Identifier",
            "start": 198,
            "end": 202,
            "name": "TRec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 211,
          "end": 219,
          "typeName": {
            "type": "Identifier",
            "start": 211,
            "end": 219,
            "name": "MyRecord",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 222,
          "end": 233,
          "typeName": {
            "type": "Identifier",
            "start": 222,
            "end": 227,
            "name": "MySet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 227,
            "end": 233,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 228,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 232,
                  "name": "TRec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSArrayType",
          "start": 236,
          "end": 242,
          "elementType": {
            "type": "TSTypeReference",
            "start": 236,
            "end": 240,
            "typeName": {
              "type": "Identifier",
              "start": 236,
              "end": 240,
              "name": "TRec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
