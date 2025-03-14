inKeywordAndIntersection.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 17,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 15,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 14,
              "end": 15,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 33,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 199,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 199,
        "body": [
          {
            "type": "IfStatement",
            "start": 84,
            "end": 197,
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
                    "optional": false
                  }
                }
              ]
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
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 88,
              "end": 109,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 109,
                "decorators": [],
                "name": "Object",
                "optional": false
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
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
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
                        "optional": false
                      }
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
                          "key": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 62,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 62,
                            "end": 70,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 64,
                              "end": 70
                            }
                          }
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
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 264,
      "body": {
        "type": "TSInterfaceBody",
        "start": 245,
        "end": 264,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 251,
            "end": 262,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "decorators": [],
              "name": "one",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 244,
        "decorators": [],
        "name": "InstanceOne",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 266,
      "end": 307,
      "body": {
        "type": "TSInterfaceBody",
        "start": 288,
        "end": 307,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 294,
            "end": 305,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 297,
              "decorators": [],
              "name": "two",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 287,
        "decorators": [],
        "name": "InstanceTwo",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 323,
            "decorators": [],
            "name": "instance",
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
                    "decorators": [],
                    "name": "InstanceOne",
                    "optional": false
                  }
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
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 373,
            "decorators": [],
            "name": "ClassOne",
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
                            "optional": false
                          }
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
                      "key": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 412,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "true",
                            "value": true
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 423,
      "end": 480,
      "alternate": null,
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 463,
                "end": 475,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 471,
                  "decorators": [],
                  "name": "instance",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 475,
                  "decorators": [],
                  "name": "one",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 427,
        "end": 455,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 427,
          "end": 435,
          "decorators": [],
          "name": "instance",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 447,
          "end": 455,
          "decorators": [],
          "name": "ClassOne",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
