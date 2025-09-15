__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
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
                      "start": 36,
                      "end": 37
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 36,
                    "end": 37
                  }
                ],
                "start": 35,
                "end": 38
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
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
                        "start": 42,
                        "end": 43
                      },
                      "typeArguments": null,
                      "start": 42,
                      "end": 43
                    },
                    "start": 40,
                    "end": 43
                  },
                  "start": 39,
                  "end": 43
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "start": 47,
                    "end": 56
                  }
                ],
                "start": 45,
                "end": 58
              },
              "expression": false,
              "start": 25,
              "end": 58
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 58
          }
        ],
        "start": 12,
        "end": 60
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 98
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 120,
                            "end": 121
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 124,
                            "end": 125
                          },
                          "definite": false,
                          "start": 120,
                          "end": 125
                        }
                      ],
                      "declare": false,
                      "start": 116,
                      "end": 126
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 109,
                    "end": 126
                  }
                ],
                "start": 99,
                "end": 132
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 87,
              "end": 132
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 80,
            "end": 132
          }
        ],
        "start": 74,
        "end": 134
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 62,
      "end": 134
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 144
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  },
                  "start": 143,
                  "end": 146
                },
                "typeArguments": null,
                "start": 143,
                "end": 146
              },
              "start": 141,
              "end": 146
            },
            "start": 140,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 146
        }
      ],
      "declare": false,
      "start": 136,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "optional": false,
          "computed": false,
          "start": 148,
          "end": 151
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 152,
            "end": 153
          }
        ],
        "optional": false,
        "start": 148,
        "end": 154
      },
      "directive": null,
      "start": 148,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
