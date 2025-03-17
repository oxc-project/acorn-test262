__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 334,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 22,
            "end": 45,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 29,
              "end": 45,
              "body": {
                "type": "TSEnumBody",
                "start": 36,
                "end": 45,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 38,
                    "end": 43,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 42,
                      "end": 43,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "first",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 97,
      "body": {
        "type": "TSModuleBlock",
        "start": 66,
        "end": 97,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 72,
            "end": 95,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 79,
              "end": 95,
              "body": {
                "type": "TSEnumBody",
                "start": 86,
                "end": 95,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 88,
                    "end": 93,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 92,
                      "end": 93,
                      "raw": "2",
                      "value": 2
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 65,
        "decorators": [],
        "name": "second",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 149,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 122,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 122,
              "end": 147,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 147,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 137,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 137,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 130,
                        "end": 137,
                        "left": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 135,
                          "decorators": [],
                          "name": "first",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
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
        "start": 105,
        "end": 109,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 151,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 226,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 224,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 199,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 199,
              "end": 224,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 224,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 200,
                  "end": 215,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 215,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 207,
                      "end": 215,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 207,
                        "end": 215,
                        "left": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 213,
                          "decorators": [],
                          "name": "second",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 215,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
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
        "start": 157,
        "end": 164,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 173,
        "end": 177,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 228,
      "end": 267,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 256,
        "decorators": [],
        "name": "overloadingFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 258,
        "end": 267,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 260,
          "end": 267,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 260,
            "end": 267,
            "left": {
              "type": "Identifier",
              "start": 260,
              "end": 265,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 334,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 309,
        "end": 334,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 315,
            "end": 332,
            "argument": {
              "type": "MemberExpression",
              "start": 322,
              "end": 332,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 322,
                "end": 330,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 328,
                  "decorators": [],
                  "name": "second",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 330,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "B",
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
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 296,
        "decorators": [],
        "name": "overloadingFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 298,
        "end": 308,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 300,
          "end": 308,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 300,
            "end": 308,
            "left": {
              "type": "Identifier",
              "start": 300,
              "end": 306,
              "decorators": [],
              "name": "second",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
