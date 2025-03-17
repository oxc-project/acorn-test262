__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "ViewOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 28,
              "name": "TModel",
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "name": "model",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "TModel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 54,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "name": "View",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 145,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 90,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 124,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 91,
                  "end": 119,
                  "name": "options",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 100,
                      "end": 119,
                      "typeName": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 111,
                        "name": "ViewOptions",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "TModel",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 124,
                "body": []
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
            "type": "PropertyDefinition",
            "start": 129,
            "end": 143,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 134,
              "name": "model",
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
                  "name": "TModel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 71,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "name": "TModel",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 147,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 158,
        "name": "Model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 162,
        "body": []
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
      "start": 163,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 175,
        "name": "MyView",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
        "name": "View",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 199,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
              "name": "Model",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 226,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 208,
                "end": 226,
                "typeName": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 219,
                  "name": "ViewOptions",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "Model",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 236,
                  "name": "model",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 238,
                  "end": 249,
                  "callee": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 247,
                    "name": "Model",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 262,
            "name": "aView",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 265,
            "end": 297,
            "callee": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "name": "View",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 281,
                      "name": "model",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 283,
                      "end": 294,
                      "callee": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 292,
                        "name": "Model",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 310,
            "name": "aView2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 313,
            "end": 324,
            "callee": {
              "type": "Identifier",
              "start": 317,
              "end": 321,
              "name": "View",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 337,
            "name": "myView",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 340,
            "end": 353,
            "callee": {
              "type": "Identifier",
              "start": 344,
              "end": 350,
              "name": "MyView",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 351,
                "end": 352,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
