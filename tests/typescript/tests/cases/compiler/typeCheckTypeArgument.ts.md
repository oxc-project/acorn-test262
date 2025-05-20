__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 36,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 36,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7,
                "end": 36,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 32,
                    "end": 36
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7,
                  "end": 26,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 8,
                      "end": 25,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 18,
                        "end": 25,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 18,
                          "end": 25,
                          "decorators": [],
                          "name": "UNKNOWN",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 8,
                        "end": 9,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 76,
      "body": {
        "type": "TSInterfaceBody",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 53,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 71,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 71,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 71,
                "decorators": [],
                "name": "UNKNOWN",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 110,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 105,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 98,
              "end": 105,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 98,
                "end": 105,
                "decorators": [],
                "name": "UNKNOWN",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 149,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 149,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 143,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 142,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 142,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 142,
                "decorators": [],
                "name": "UNKNOWN",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 151,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 199,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 174,
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
              "start": 174,
              "end": 199,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 199,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 174,
                "end": 193,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 175,
                    "end": 192,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 192,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 192,
                        "decorators": [],
                        "name": "UNKNOWN",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 161,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 235,
      "directive": null,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 204,
        "end": 233,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 230,
          "end": 233,
          "body": []
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 204,
          "end": 223,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 205,
              "end": 222,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 222,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 222,
                  "decorators": [],
                  "name": "UNKNOWN",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
