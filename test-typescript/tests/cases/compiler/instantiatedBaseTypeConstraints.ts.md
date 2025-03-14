__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 62,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 62,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 60,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 49,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 51,
                    "end": 52,
                    "typeName": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 59,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 55,
                "end": 59
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 33,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 33,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 27,
                "end": 33,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 28,
                    "end": 29,
                    "typeName": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 32,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 27,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 136,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 134,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 134,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 134,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 121,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 115,
                      "end": 121
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 122,
                "end": 128,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 124,
                  "end": 128
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 85,
          "end": 101,
          "expression": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 88,
            "end": 101,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 89,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              }
            ]
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
