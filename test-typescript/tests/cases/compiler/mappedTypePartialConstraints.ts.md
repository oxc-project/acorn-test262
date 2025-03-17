__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 245,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 68,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 68,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 48,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 43,
        "decorators": [],
        "name": "MyInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 70,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 139,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 137,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "decorators": [],
              "name": "doIt",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 137,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 137,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 116,
                  "end": 133,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 123,
                      "end": 133,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 130,
                        "end": 133,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 131,
                            "end": 132,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 132,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 130,
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 83,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 105,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 105,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 105,
                "decorators": [],
                "name": "MyInterface",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
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
      "start": 141,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 187,
        "end": 189,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 157,
        "decorators": [],
        "name": "MySubClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 166,
        "end": 173,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 173,
        "end": 186,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 174,
            "end": 185,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 174,
              "end": 185,
              "decorators": [],
              "name": "MyInterface",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 226,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 224,
        "end": 226,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 202,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 203,
          "end": 222,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 206,
            "end": 222,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 208,
              "end": 222,
              "exprName": {
                "type": "Identifier",
                "start": 215,
                "end": 222,
                "decorators": [],
                "name": "MyClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 226,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 244,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 229,
        "end": 243,
        "arguments": [
          {
            "type": "Identifier",
            "start": 232,
            "end": 242,
            "decorators": [],
            "name": "MySubClass",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 229,
          "end": 231,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
