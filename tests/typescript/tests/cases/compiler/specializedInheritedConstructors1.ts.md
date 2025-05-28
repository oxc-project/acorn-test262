__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "ViewOptions",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 28,
              "decorators": [],
              "name": "TModel",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
              "decorators": [],
              "name": "model",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TModel",
                  "optional": false,
                  "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "TModel",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 145,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 124,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 90,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 124,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 111,
                        "decorators": [],
                        "name": "ViewOptions",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "TModel",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 124,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 143,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 134,
              "decorators": [],
              "name": "model",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
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
      "start": 147,
      "end": 162,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 158,
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 162,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 199,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 175,
        "decorators": [],
        "name": "MyView",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 199,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 252,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 251,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 219,
                  "decorators": [],
                  "name": "ViewOptions",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Model",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 236,
                  "decorators": [],
                  "name": "model",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 238,
                  "end": 249,
                  "callee": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 247,
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 298,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 262,
            "decorators": [],
            "name": "aView",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 265,
            "end": 297,
            "callee": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "decorators": [],
              "name": "View",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 281,
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 283,
                      "end": 294,
                      "callee": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 292,
                        "decorators": [],
                        "name": "Model",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 325,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 324,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 310,
            "decorators": [],
            "name": "aView2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 313,
            "end": 324,
            "callee": {
              "type": "Identifier",
              "start": 317,
              "end": 321,
              "decorators": [],
              "name": "View",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 354,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 337,
            "decorators": [],
            "name": "myView",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 340,
            "end": 353,
            "callee": {
              "type": "Identifier",
              "start": 344,
              "end": 350,
              "decorators": [],
              "name": "MyView",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 351,
                "end": 352,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
