__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 517,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 81,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 47,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 38,
              "name": "interfaceFooMethod",
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
              "start": 40,
              "end": 46,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 42,
                "end": 46
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 79,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 72,
              "name": "interfaceFooProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 78,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 74,
                "end": 78
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 92,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 181,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 115,
              "name": "classFooProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 179,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 142,
              "name": "classFooMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 179,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 144,
                "end": 150,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 146,
                  "end": 150
                }
              }
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 184,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 197,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 198,
        "end": 265,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 204,
            "end": 231,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 222,
              "name": "interfaceBarMethod",
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
              "start": 224,
              "end": 230,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 226,
                "end": 230
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 236,
            "end": 263,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 256,
              "name": "interfaceBarProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 262,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 258,
                "end": 262
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 267,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 276,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 285,
        "end": 288,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 289,
        "end": 377,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 295,
            "end": 318,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 311,
              "name": "classBarProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 375,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 338,
              "name": "classBarMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 338,
              "end": 375,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 340,
                "end": 346,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 342,
                  "end": 346
                }
              }
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
    {
      "type": "VariableDeclaration",
      "start": 380,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 387,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 390,
            "end": 399,
            "callee": {
              "type": "Identifier",
              "start": 394,
              "end": 397,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 481,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 480,
        "callee": {
          "type": "MemberExpression",
          "start": 401,
          "end": 478,
          "object": {
            "type": "CallExpression",
            "start": 401,
            "end": 463,
            "callee": {
              "type": "MemberExpression",
              "start": 401,
              "end": 461,
              "object": {
                "type": "CallExpression",
                "start": 401,
                "end": 446,
                "callee": {
                  "type": "MemberExpression",
                  "start": 401,
                  "end": 444,
                  "object": {
                    "type": "CallExpression",
                    "start": 401,
                    "end": 425,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 401,
                      "end": 423,
                      "object": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 404,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 423,
                        "name": "interfaceBarMethod",
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
                  "property": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 444,
                    "name": "interfaceFooMethod",
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
              "property": {
                "type": "Identifier",
                "start": 447,
                "end": 461,
                "name": "classBarMethod",
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
          "property": {
            "type": "Identifier",
            "start": 464,
            "end": 478,
            "name": "classFooMethod",
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
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 491,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 494,
            "end": 503,
            "callee": {
              "type": "Identifier",
              "start": 498,
              "end": 501,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 506,
      "end": 516,
      "expression": {
        "type": "AssignmentExpression",
        "start": 506,
        "end": 515,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 506,
          "end": 509,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 512,
          "end": 515,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
