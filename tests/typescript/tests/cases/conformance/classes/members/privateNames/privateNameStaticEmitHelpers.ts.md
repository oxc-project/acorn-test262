__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 110,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 110,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 110,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 35,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 28,
                "end": 30,
                "name": "a"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "MethodDefinition",
              "start": 40,
              "end": 69,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 47,
                "end": 49,
                "name": "b"
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 69,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 52,
                  "end": 69,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 54,
                      "end": 67,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 54,
                        "end": 66,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 54,
                          "end": 61,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 54,
                            "end": 58
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 59,
                            "end": 61,
                            "name": "a"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 64,
                          "end": 66,
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
              "start": 74,
              "end": 108,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 85,
                "end": 87,
                "name": "c"
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 87,
                "end": 108,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 90,
                  "end": 108,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 92,
                      "end": 106,
                      "argument": {
                        "type": "CallExpression",
                        "start": 99,
                        "end": 105,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 99,
                          "end": 103,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 100,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 101,
                            "end": 103,
                            "name": "b"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
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
          "name": "S",
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
