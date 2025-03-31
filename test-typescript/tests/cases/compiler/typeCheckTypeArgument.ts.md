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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 36,
            "name": "f",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 18,
                        "end": 25,
                        "typeName": {
                          "type": "Identifier",
                          "start": 18,
                          "end": 25,
                          "name": "UNKNOWN",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "IFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 71,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 71,
                "name": "UNKNOWN",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 110,
        "body": []
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 98,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 98,
                "end": 105,
                "name": "UNKNOWN",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 149,
        "body": []
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 142,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 142,
                "name": "UNKNOWN",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 151,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 161,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 174,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 199,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 199,
                "body": []
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 192,
                        "name": "UNKNOWN",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
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
      "type": "ExpressionStatement",
      "start": 203,
      "end": 235,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 204,
        "end": 233,
        "id": null,
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 230,
          "end": 233,
          "body": []
        },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 222,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 222,
                  "name": "UNKNOWN",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "returnType": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
