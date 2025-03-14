generics3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 26,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 57,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 57,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 43,
            "end": 55,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
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
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "X",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 86,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 86,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 72,
            "end": 84,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
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
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 98,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 98,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 95,
                  "end": 98,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 96,
                      "end": 97,
                      "typeName": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "X",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 111,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 111,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 108,
                  "end": 111,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "Y",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 120,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
