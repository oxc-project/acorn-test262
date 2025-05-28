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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 110,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 110,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 35,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 28,
                "end": 30,
                "name": "a"
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 40,
              "end": 69,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 47,
                "end": 49,
                "name": "b"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 69,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 52,
                  "end": 69,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 54,
                      "end": 67,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 54,
                        "end": 66,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 54,
                          "end": 61,
                          "object": {
                            "type": "ThisExpression",
                            "start": 54,
                            "end": 58
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 59,
                            "end": 61,
                            "name": "a"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 64,
                          "end": 66,
                          "value": 42,
                          "raw": "42"
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 74,
              "end": 108,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 85,
                "end": 87,
                "name": "c"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 87,
                "end": 108,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 99,
                          "end": 103,
                          "object": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 100,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 101,
                            "end": 103,
                            "name": "b"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 101,
        "end": 190,
        "id": {
          "type": "Identifier",
          "start": 118,
          "end": 140,
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 140,
          "end": 161,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 141,
              "end": 157,
              "name": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 151,
                "end": 157
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 159,
              "end": 160,
              "name": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "typeName": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 297,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 198,
        "end": 297,
        "id": {
          "type": "Identifier",
          "start": 215,
          "end": 237,
          "decorators": [],
          "name": "__classPrivateFieldSet",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 237,
          "end": 258,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 238,
              "end": 254,
              "name": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 248,
                "end": 254
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 256,
              "end": 257,
              "name": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
                "typeName": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 292,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "typeName": {
              "type": "Identifier",
              "start": 295,
              "end": 296,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
