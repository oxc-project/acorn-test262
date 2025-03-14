decoratorCallGeneric.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 30,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 39,
            "end": 49,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 49,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 42,
                "end": 49,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 48,
                    "end": 49,
                    "typeName": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            }
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
        "name": "I",
        "optional": false
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 80,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 80,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 75,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 75,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 71,
              "end": 75,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 72,
                "end": 75,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 74,
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 67,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 66,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 133,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 113,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 107,
              "decorators": [],
              "name": "_brand",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 112,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 109,
                "end": 112
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 118,
            "end": 131,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 131,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 82,
          "end": 86,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
