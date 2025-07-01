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
        "name": "MyRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 22
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 38,
              "end": 41
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 29,
            "end": 41
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 51,
                  "end": 58
                },
                "start": 49,
                "end": 58
              },
              "body": null,
              "expression": false,
              "start": 47,
              "end": 59
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 46,
            "end": 59
          }
        ],
        "start": 23,
        "end": 61
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MySet",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 82
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 87
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 104
              },
              "typeArguments": null,
              "start": 96,
              "end": 104
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 104
          }
        ],
        "start": 82,
        "end": 105
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 123
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TSet",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 131
                  },
                  "typeArguments": null,
                  "start": 127,
                  "end": 131
                },
                "start": 125,
                "end": 131
              },
              "body": null,
              "expression": false,
              "start": 123,
              "end": 132
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 112,
            "end": 132
          }
        ],
        "start": 106,
        "end": 134
      },
      "abstract": false,
      "declare": true,
      "start": 63,
      "end": 134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DS",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TRec",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 148
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyRecord",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 165
                  },
                  "typeArguments": null,
                  "start": 157,
                  "end": 165
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 176,
                              "end": 182
                            },
                            "start": 174,
                            "end": 182
                          },
                          "start": 171,
                          "end": 182
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 185,
                          "end": 192
                        },
                        "start": 183,
                        "end": 192
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 170,
                      "end": 192
                    }
                  ],
                  "start": 168,
                  "end": 194
                }
              ],
              "start": 157,
              "end": 194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 144,
            "end": 194
          }
        ],
        "start": 143,
        "end": 195
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 202
          },
          "typeArguments": null,
          "start": 198,
          "end": 202
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 219
          },
          "typeArguments": null,
          "start": 211,
          "end": 219
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MySet",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 227
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TRec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 232
                },
                "typeArguments": null,
                "start": 228,
                "end": 232
              }
            ],
            "start": 227,
            "end": 233
          },
          "start": 222,
          "end": 233
        },
        "falseType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TRec",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "typeArguments": null,
            "start": 236,
            "end": 240
          },
          "start": 236,
          "end": 242
        },
        "start": 198,
        "end": 242
      },
      "declare": false,
      "start": 136,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
