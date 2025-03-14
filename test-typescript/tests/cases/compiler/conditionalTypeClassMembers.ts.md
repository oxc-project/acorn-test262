conditionalTypeClassMembers.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 41,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 38,
              "end": 41,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 59,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 47,
              "end": 59,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 22,
        "decorators": [],
        "name": "MyRecord",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 134,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 112,
            "end": 132,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 123,
              "decorators": [],
              "name": "item",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 123,
              "end": 132,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
                    "decorators": [],
                    "name": "TSet",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 82,
        "decorators": [],
        "name": "MySet",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 104,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 104,
                "decorators": [],
                "name": "MyRecord",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "TSet",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 243,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "decorators": [],
        "name": "DS",
        "optional": false
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
            "decorators": [],
            "name": "TRec",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 211,
          "end": 219,
          "typeName": {
            "type": "Identifier",
            "start": 211,
            "end": 219,
            "decorators": [],
            "name": "MyRecord",
            "optional": false
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
              "decorators": [],
              "name": "TRec",
              "optional": false
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 222,
          "end": 233,
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
                  "decorators": [],
                  "name": "TRec",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 222,
            "end": 227,
            "decorators": [],
            "name": "MySet",
            "optional": false
          }
        }
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
            "const": false,
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
                    "decorators": [],
                    "name": "MyRecord",
                    "optional": false
                  }
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
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 174,
                            "end": 182,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 176,
                              "end": 182
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 183,
                        "end": 192,
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 185,
                          "end": 192
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "decorators": [],
              "name": "TRec",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
