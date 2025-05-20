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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 70,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 68,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 68,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 68,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 42,
                "end": 57,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 43,
                    "end": 56,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 53,
                      "end": 56,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 56,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
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
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 120,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 120,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 118,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 118,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 114,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 92,
                "end": 107,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 93,
                    "end": 106,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 106,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 106,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
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
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 150,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 138,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 141,
            "end": 150,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
