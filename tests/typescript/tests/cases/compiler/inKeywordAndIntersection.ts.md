__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 480,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 17,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 17,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 15,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 14,
              "end": 15,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 35,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 33,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 76,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 76,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 55,
              "end": 76,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 55,
                  "end": 72,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 55,
                      "end": 56,
                      "typeName": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 59,
                      "end": 72,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 61,
                          "end": 70,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 62,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 62,
                            "end": 70,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 64,
                              "end": 70
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 75,
                  "end": 76,
                  "typeName": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 199,
        "body": [
          {
            "type": "IfStatement",
            "start": 84,
            "end": 197,
            "test": {
              "type": "BinaryExpression",
              "start": 88,
              "end": 109,
              "left": {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 109,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 111,
              "end": 157,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 121,
                  "end": 125,
                  "expression": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 124,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 167,
              "end": 197,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 177,
                  "end": 181,
                  "expression": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 180,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 244,
        "decorators": [],
        "name": "InstanceOne",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 245,
        "end": 264,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 251,
            "end": 262,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 262,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 258,
                "end": 262
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 266,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 287,
        "decorators": [],
        "name": "InstanceTwo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 288,
        "end": 307,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 294,
            "end": 305,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 297,
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 305,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 301,
                "end": 305
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 357,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 323,
            "decorators": [],
            "name": "instance",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 326,
            "end": 357,
            "expression": {
              "type": "ObjectExpression",
              "start": 326,
              "end": 328,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 332,
              "end": 357,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 332,
                  "end": 343,
                  "typeName": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 343,
                    "decorators": [],
                    "name": "InstanceOne",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 346,
                  "end": 357,
                  "typeName": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 357,
                    "decorators": [],
                    "name": "InstanceTwo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 421,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 420,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 373,
            "decorators": [],
            "name": "ClassOne",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 376,
            "end": 420,
            "expression": {
              "type": "ObjectExpression",
              "start": 376,
              "end": 378,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 382,
              "end": 420,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 382,
                  "end": 404,
                  "members": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 384,
                      "end": 402,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 389,
                        "end": 402,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 391,
                          "end": 402,
                          "typeName": {
                            "type": "Identifier",
                            "start": 391,
                            "end": 402,
                            "decorators": [],
                            "name": "InstanceOne",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 407,
                  "end": 420,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 409,
                      "end": 418,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 412,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 412,
                        "end": 418,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 414,
                          "end": 418,
                          "literal": {
                            "type": "Literal",
                            "start": 414,
                            "end": 418,
                            "value": true,
                            "raw": "true"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 423,
      "end": 480,
      "test": {
        "type": "BinaryExpression",
        "start": 427,
        "end": 455,
        "left": {
          "type": "Identifier",
          "start": 427,
          "end": 435,
          "decorators": [],
          "name": "instance",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 447,
          "end": 455,
          "decorators": [],
          "name": "ClassOne",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 457,
        "end": 480,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 463,
            "end": 478,
            "expression": {
              "type": "CallExpression",
              "start": 463,
              "end": 477,
              "callee": {
                "type": "MemberExpression",
                "start": 463,
                "end": 475,
                "object": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 471,
                  "decorators": [],
                  "name": "instance",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 475,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
