__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 64,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 38,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 26,
              "end": 38,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 26,
                "end": 29,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 27,
                    "end": 28,
                    "name": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 28,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 33,
                  "end": 37,
                  "typeName": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 34,
                    "end": 37,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 35,
                        "end": 36,
                        "typeName": {
                          "type": "Identifier",
                          "start": 35,
                          "end": 36,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 62,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 51,
              "end": 62,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 61,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 56,
                    "end": 61,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 57,
                        "end": 60
                      }
                    ]
                  }
                }
              }
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
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 135,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 106,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 133,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 133,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 127,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 126,
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 83,
        "end": 88,
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 84,
            "end": 87
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
