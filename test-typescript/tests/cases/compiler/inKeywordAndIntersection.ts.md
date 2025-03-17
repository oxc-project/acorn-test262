__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 481,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 17,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 15,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 14,
              "end": 15,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 18,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 33,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "name": "f10",
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
          "start": 50,
          "end": 76,
          "name": "obj",
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 109,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 244,
        "name": "InstanceOne",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "InstanceTwo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "two",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 323,
            "name": "instance",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "name": "InstanceOne",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "InstanceTwo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 420,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 373,
            "name": "ClassOne",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                            "name": "InstanceOne",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "kind": "const",
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
          "name": "instance",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 447,
          "end": 455,
          "name": "ClassOne",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "instance",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 475,
                  "name": "one",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
