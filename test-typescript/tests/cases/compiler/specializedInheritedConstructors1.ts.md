specializedInheritedConstructors1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 368,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "model",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "TModel",
                  "optional": false
                }
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
        "end": 21,
        "decorators": [],
        "name": "ViewOptions",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 28,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 28,
              "decorators": [],
              "name": "TModel",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 145,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 145,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 124,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 90,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 124,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 91,
                  "end": 119,
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 100,
                      "end": 119,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 111,
                        "end": 119,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 112,
                            "end": 118,
                            "typeName": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 118,
                              "decorators": [],
                              "name": "TModel",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 111,
                        "decorators": [],
                        "name": "ViewOptions",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 143,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 134,
              "decorators": [],
              "name": "model",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 142,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 142,
                  "decorators": [],
                  "name": "TModel",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "decorators": [],
        "name": "View",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 71,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "TModel",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 147,
      "end": 162,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 162,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 158,
        "decorators": [],
        "name": "Model",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 199,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 199,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 175,
        "decorators": [],
        "name": "MyView",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
        "decorators": [],
        "name": "View",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 188,
        "end": 195,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 189,
            "end": 194,
            "typeName": {
              "type": "Identifier",
              "start": 189,
              "end": 194,
              "decorators": [],
              "name": "Model",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 226,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 208,
                "end": 226,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 219,
                  "end": 226,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 220,
                      "end": 225,
                      "typeName": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 225,
                        "decorators": [],
                        "name": "Model",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 219,
                  "decorators": [],
                  "name": "ViewOptions",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 229,
            "end": 251,
            "properties": [
              {
                "type": "Property",
                "start": 231,
                "end": 249,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 236,
                  "decorators": [],
                  "name": "model",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 238,
                  "end": 249,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 247,
                    "decorators": [],
                    "name": "Model",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 297,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 262,
            "decorators": [],
            "name": "aView",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 265,
            "end": 297,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 274,
                "end": 296,
                "properties": [
                  {
                    "type": "Property",
                    "start": 276,
                    "end": 294,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 281,
                      "decorators": [],
                      "name": "model",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 283,
                      "end": 294,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 292,
                        "decorators": [],
                        "name": "Model",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "decorators": [],
              "name": "View",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 324,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 310,
            "decorators": [],
            "name": "aView2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 313,
            "end": 324,
            "arguments": [
              {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 317,
              "end": 321,
              "decorators": [],
              "name": "View",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 353,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 337,
            "decorators": [],
            "name": "myView",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 340,
            "end": 353,
            "arguments": [
              {
                "type": "Identifier",
                "start": 351,
                "end": 352,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 344,
              "end": 350,
              "decorators": [],
              "name": "MyView",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
