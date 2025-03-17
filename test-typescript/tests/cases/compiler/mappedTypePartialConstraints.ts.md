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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 43,
        "name": "MyInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 68,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 48,
            "end": 66,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "name": "something",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
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
      "start": 70,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 83,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 139,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 137,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "name": "doIt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 137,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 116,
                  "end": 133,
                  "name": "data",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 123,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 130,
                        "name": "Partial",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 130,
                        "end": 133,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 131,
                            "end": 132,
                            "typeName": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 132,
                              "name": "T",
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
                "start": 135,
                "end": 137,
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 105,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 105,
                "name": "MyInterface",
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
      "type": "ClassDeclaration",
      "start": 141,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 157,
        "name": "MySubClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 166,
        "end": 173,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 187,
        "end": 189,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 173,
        "end": 186,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 174,
            "end": 185,
            "typeName": {
              "type": "Identifier",
              "start": 174,
              "end": 185,
              "name": "MyInterface",
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
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 202,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 203,
          "end": 222,
          "name": "arg",
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
                "name": "MyClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 224,
        "end": 226,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "expression": {
        "type": "CallExpression",
        "start": 229,
        "end": 243,
        "callee": {
          "type": "Identifier",
          "start": 229,
          "end": 231,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 232,
            "end": 242,
            "name": "MySubClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
