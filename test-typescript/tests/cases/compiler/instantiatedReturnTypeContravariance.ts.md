__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 43,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 33,
            "end": 40,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 39,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "start": 46,
      "end": 93,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 93,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 90,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 90,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 72,
                "end": 90,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 87,
                    "argument": {
                      "type": "Literal",
                      "start": 82,
                      "end": 86,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 71,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 65,
                    "end": 71,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 66,
                        "end": 70
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "c",
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
      "start": 96,
      "end": 155,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 155,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 137,
                    "end": 149,
                    "argument": {
                      "type": "Literal",
                      "start": 144,
                      "end": 148,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 122,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 133,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 125,
                    "end": 133,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
