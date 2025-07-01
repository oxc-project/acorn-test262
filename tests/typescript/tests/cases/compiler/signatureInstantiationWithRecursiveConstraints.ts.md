__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 31
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 42
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 44
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 56
                      },
                      "typeArguments": null,
                      "start": 53,
                      "end": 56
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 43,
                    "end": 56
                  }
                ],
                "start": 42,
                "end": 57
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "typeArguments": null,
                      "start": 63,
                      "end": 64
                    },
                    "start": 61,
                    "end": 64
                  },
                  "start": 58,
                  "end": 64
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 66,
                "end": 68
              },
              "expression": false,
              "start": 42,
              "end": 68
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 36,
            "end": 68
          }
        ],
        "start": 32,
        "end": 70
      },
      "abstract": false,
      "declare": false,
      "start": 22,
      "end": 70
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 81
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 92
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 94
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 106
                      },
                      "typeArguments": null,
                      "start": 103,
                      "end": 106
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 93,
                    "end": 106
                  }
                ],
                "start": 92,
                "end": 107
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 114
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 114
                    },
                    "start": 111,
                    "end": 114
                  },
                  "start": 108,
                  "end": 114
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 116,
                "end": 118
              },
              "expression": false,
              "start": 92,
              "end": 118
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 86,
            "end": 118
          }
        ],
        "start": 82,
        "end": 120
      },
      "abstract": false,
      "declare": false,
      "start": 72,
      "end": 120
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 138
                },
                "typeArguments": null,
                "start": 135,
                "end": 138
              },
              "start": 133,
              "end": 138
            },
            "start": 128,
            "end": 138
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 148
            },
            "typeArguments": null,
            "arguments": [],
            "start": 141,
            "end": 150
          },
          "definite": false,
          "start": 128,
          "end": 150
        }
      ],
      "declare": false,
      "start": 122,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 151
}
```
