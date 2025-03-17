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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "S",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 110,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 35,
              "static": true,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 28,
                "end": 30,
                "name": "a"
              },
              "value": {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 40,
              "end": 69,
              "static": true,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 47,
                "end": 49,
                "name": "b"
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 49,
                "end": 69,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "computed": false,
                          "optional": false
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
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 74,
              "end": 108,
              "static": true,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 85,
                "end": 87,
                "name": "c"
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 87,
                "end": 108,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "name": "S",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 101,
                            "end": 103,
                            "name": "b"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 298,
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
          "name": "__classPrivateFieldGet",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 162,
            "end": 173,
            "name": "receiver",
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
          {
            "type": "Identifier",
            "start": 175,
            "end": 185,
            "name": "state",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 185,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 182,
                "end": 185
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__classPrivateFieldSet",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 259,
            "end": 270,
            "name": "receiver",
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
          {
            "type": "Identifier",
            "start": 272,
            "end": 282,
            "name": "state",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 282,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 284,
            "end": 292,
            "name": "value",
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
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
