__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 320,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 31,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 50,
                  "end": 76,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 57,
                    "end": 76,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 68,
                        "end": 76,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 68,
                          "end": 74
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 85,
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
      "start": 89,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 104,
        "name": "TupleType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 106,
        "end": 131,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 107,
            "end": 113
          },
          {
            "type": "TSNumberKeyword",
            "start": 115,
            "end": 121
          },
          {
            "type": "TSBooleanKeyword",
            "start": 123,
            "end": 130
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 141,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 159,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 159,
              "end": 197,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 160,
                  "end": 188,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 167,
                    "end": 188,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 174,
                        "end": 175,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 176,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 178,
                        "end": 188,
                        "typeName": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 188,
                          "name": "TupleType1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 197,
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
      "start": 201,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 214,
        "name": "ObjType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 217,
        "end": 253,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 219,
            "end": 229,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 228,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 222,
                "end": 228
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 230,
            "end": 240,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 239,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 233,
                "end": 239
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 241,
            "end": 251,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 251,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 244,
                "end": 251
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 254,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 262,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 263,
        "end": 320,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 269,
            "end": 318,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 280,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 280,
              "end": 318,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 281,
                  "end": 309,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ObjectPattern",
                    "start": 288,
                    "end": 309,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 290,
                        "end": 291,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 293,
                        "end": 294,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 294,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 294,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 296,
                        "end": 297,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 299,
                      "end": 309,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 301,
                        "end": 309,
                        "typeName": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 309,
                          "name": "ObjType1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 311,
                "end": 318,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
