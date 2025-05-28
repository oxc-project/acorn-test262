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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
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
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7,
                  "end": 26,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 8,
                      "end": 25,
                      "name": {
                        "type": "Identifier",
                        "start": 8,
                        "end": 9,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 18,
                        "end": 25,
                        "typeName": {
                          "type": "Identifier",
                          "start": 18,
                          "end": 25,
                          "decorators": [],
                          "name": "UNKNOWN",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 76,
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
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 71,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 71,
                "decorators": [],
                "name": "UNKNOWN",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 110,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 105,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 98,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 98,
                "end": 105,
                "decorators": [],
                "name": "UNKNOWN",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
        "start": 107,
        "end": 110,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 143,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 142,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 142,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 142,
                "decorators": [],
                "name": "UNKNOWN",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 149,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 151,
      "end": 201,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 199,
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
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 199,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 174,
                "end": 193,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 175,
                    "end": 192,
                    "name": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 192,
                        "decorators": [],
                        "name": "UNKNOWN",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 199,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 235,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 204,
        "end": 233,
        "expression": false,
        "async": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 204,
          "end": 223,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 205,
              "end": 222,
              "name": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 222,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 222,
                  "decorators": [],
                  "name": "UNKNOWN",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
        "body": {
          "type": "BlockStatement",
          "start": 230,
          "end": 233,
          "body": []
        },
        "id": null,
        "generator": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
