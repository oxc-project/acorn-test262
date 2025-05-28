__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 151,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 70,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 70,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 68,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 42,
              "decorators": [],
              "name": "myFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 68,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 42,
                "end": 57,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 43,
                    "end": 56,
                    "name": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 53,
                      "end": 56,
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 56,
                        "decorators": [],
                        "name": "Foo",
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
                  "start": 58,
                  "end": 64,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 63,
                      "end": 64,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 68,
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
      "type": "ClassDeclaration",
      "start": 72,
      "end": 120,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 120,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 118,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 92,
              "decorators": [],
              "name": "myFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 118,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 92,
                "end": 107,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 93,
                    "end": 106,
                    "name": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 106,
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 106,
                        "decorators": [],
                        "name": "Bar",
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
                  "start": 108,
                  "end": 114,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 113,
                      "end": 114,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 114,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 118,
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
      "type": "VariableDeclaration",
      "start": 122,
      "end": 151,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 138,
            "decorators": [],
            "name": "myVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 135,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 138,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 141,
            "end": 150,
            "callee": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
