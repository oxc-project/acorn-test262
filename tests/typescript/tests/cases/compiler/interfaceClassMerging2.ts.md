__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 516,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 81,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 81,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 38,
              "decorators": [],
              "name": "interfaceFooMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 46,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 42,
                "end": 46
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 79,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 72,
              "decorators": [],
              "name": "interfaceFooProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 78,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 74,
                "end": 78
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 181,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 181,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 115,
              "decorators": [],
              "name": "classFooProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 121,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 117,
                "end": 121
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 179,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 142,
              "decorators": [],
              "name": "classFooMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 179,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 161,
                    "end": 173,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 168,
                      "end": 172
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 144,
                "end": 150,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 146,
                  "end": 150
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 92,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 184,
      "end": 265,
      "body": {
        "type": "TSInterfaceBody",
        "start": 198,
        "end": 265,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 204,
            "end": 231,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 222,
              "decorators": [],
              "name": "interfaceBarMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 230,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 226,
                "end": 230
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 236,
            "end": 263,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 256,
              "decorators": [],
              "name": "interfaceBarProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 262,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 258,
                "end": 262
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 197,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 267,
      "end": 377,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 289,
        "end": 377,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 295,
            "end": 318,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 311,
              "decorators": [],
              "name": "classBarProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 317,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 313,
                "end": 317
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 375,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 338,
              "decorators": [],
              "name": "classBarMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 338,
              "end": 375,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 347,
                "end": 375,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 357,
                    "end": 369,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 364,
                      "end": 368
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 340,
                "end": 346,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 342,
                  "end": 346
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 276,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 285,
        "end": 288,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 380,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 387,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 390,
            "end": 399,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 394,
              "end": 397,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 481,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 480,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 401,
          "end": 478,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 401,
            "end": 463,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 401,
              "end": 461,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 401,
                "end": 446,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 401,
                  "end": 444,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 401,
                    "end": 425,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 401,
                      "end": 423,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 404,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 423,
                        "decorators": [],
                        "name": "interfaceBarMethod",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 444,
                    "decorators": [],
                    "name": "interfaceFooMethod",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 447,
                "end": 461,
                "decorators": [],
                "name": "classBarMethod",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 464,
            "end": 478,
            "decorators": [],
            "name": "classFooMethod",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 484,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 503,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 491,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 494,
            "end": 503,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 498,
              "end": 501,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 506,
      "end": 516,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 506,
        "end": 515,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 506,
          "end": 509,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 512,
          "end": 515,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
