__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 358,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 18,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 18,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 11,
                "end": 18,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 11,
                    "end": 13,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 11,
                      "end": 13,
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 16,
                    "end": 18,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 16,
                      "end": 18,
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "start": 25,
            "end": 72,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 31,
              "end": 72,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 41,
                  "end": 49,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 43,
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 43,
                    "end": 49,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 46,
                      "end": 49,
                      "body": []
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
                  "start": 58,
                  "end": 66,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 60,
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 60,
                    "end": 66,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 63,
                      "end": 66,
                      "body": []
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
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 106,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 106,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 93,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 103,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 99,
                "end": 103
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 108,
      "end": 156,
      "body": {
        "type": "TSInterfaceBody",
        "start": 121,
        "end": 156,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 127,
            "end": 138,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 129,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 137,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 133,
                "end": 137
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 143,
            "end": 154,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 145,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 153,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 149,
                "end": 153
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 120,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 158,
      "end": 203,
      "body": {
        "type": "TSInterfaceBody",
        "start": 171,
        "end": 203,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 177,
            "end": 201,
            "params": [
              {
                "type": "RestElement",
                "start": 181,
                "end": 195,
                "argument": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 188,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 195,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 190,
                    "end": 195,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 190,
                      "end": 193
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 200,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 200,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 170,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 205,
      "end": 250,
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 250,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 224,
            "end": 248,
            "params": [
              {
                "type": "RestElement",
                "start": 228,
                "end": 242,
                "argument": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 235,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 235,
                  "end": 242,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 237,
                    "end": 242,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 237,
                      "end": 240
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 247,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 247,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 252,
      "end": 358,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 259,
        "end": 358,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 281,
          "end": 358,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 287,
              "end": 319,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 287,
                "end": 289,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 289,
                "end": 319,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 292,
                  "end": 319,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 302,
                      "end": 313,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 302,
                        "end": 312,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 302,
                          "end": 310,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 302,
                            "end": 307
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 310,
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null
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
            },
            {
              "type": "MethodDefinition",
              "start": 324,
              "end": 356,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 324,
                "end": 326,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 326,
                "end": 356,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 329,
                  "end": 356,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 339,
                      "end": 350,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 339,
                        "end": 349,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 339,
                          "end": 347,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 339,
                            "end": 344
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 345,
                            "end": 347,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
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
          "start": 265,
          "end": 268,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 277,
          "end": 280,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
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
