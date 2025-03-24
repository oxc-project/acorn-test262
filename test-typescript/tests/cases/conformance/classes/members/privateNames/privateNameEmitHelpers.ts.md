__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 97,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 97,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 97,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 28,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 21,
                "end": 23,
                "name": "a"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "MethodDefinition",
              "start": 33,
              "end": 55,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 33,
                "end": 35,
                "name": "b"
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 35,
                "end": 55,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 38,
                  "end": 55,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 40,
                      "end": 53,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 40,
                        "end": 52,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 40,
                          "end": 47,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 40,
                            "end": 44
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 45,
                            "end": 47,
                            "name": "c"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 50,
                          "end": 52,
                          "raw": "42",
                          "value": 42
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 60,
              "end": 95,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 64,
                "end": 66,
                "name": "c"
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 66,
                "end": 95,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 78,
                  "end": 95,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 80,
                      "end": 93,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 80,
                        "end": 92,
                        "operator": "+=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 80,
                          "end": 87,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 85,
                            "end": 87,
                            "name": "a"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 67,
                    "end": 76,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      }
                    }
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 94,
  "end": 297,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 94,
      "end": 190,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 101,
        "end": 190,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 118,
          "end": 140,
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 162,
            "end": 173,
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 175,
            "end": 185,
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 185,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 182,
                "end": 185
              }
            }
          }
        ],
        "returnType": {
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
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 140,
          "end": 161,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 141,
              "end": 157,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 151,
                "end": 157
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 159,
              "end": 160,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 297,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 198,
        "end": 297,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 215,
          "end": 237,
          "decorators": [],
          "name": "__classPrivateFieldSet",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 259,
            "end": 270,
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 269,
                "end": 270,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 272,
            "end": 282,
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 282,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              }
            }
          },
          {
            "type": "Identifier",
            "start": 284,
            "end": 292,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 292,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 292,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 293,
          "end": 296,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 295,
            "end": 296,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 295,
              "end": 296,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 237,
          "end": 258,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 238,
              "end": 254,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 248,
                "end": 254
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 256,
              "end": 257,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
