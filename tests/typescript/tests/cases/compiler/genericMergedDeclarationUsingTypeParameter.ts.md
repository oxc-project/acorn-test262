__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 24
              },
              "typeArguments": null,
              "start": 23,
              "end": 24
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 24
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 27
          }
        ],
        "start": 12,
        "end": 28
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 32,
                "end": 33
              },
              "typeArguments": null,
              "start": 32,
              "end": 33
            },
            "start": 30,
            "end": 33
          },
          "start": 29,
          "end": 33
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              },
              "typeArguments": null,
              "start": 38,
              "end": 39
            },
            "start": 36,
            "end": 39
          },
          "start": 35,
          "end": 39
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "start": 43,
            "end": 52
          }
        ],
        "start": 41,
        "end": 54
      },
      "expression": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 68
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
                          "start": 89,
                          "end": 90
                        },
                        "typeArguments": null,
                        "start": 89,
                        "end": 90
                      },
                      "start": 87,
                      "end": 90
                    },
                    "start": 86,
                    "end": 90
                  },
                  "init": null,
                  "definite": false,
                  "start": 86,
                  "end": 90
                }
              ],
              "declare": false,
              "start": 82,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 75,
            "end": 91
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 105,
                    "end": 106
                  },
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 107,
                    "end": 108
                  },
                  "start": 104,
                  "end": 108
                },
                "definite": false,
                "start": 100,
                "end": 108
              }
            ],
            "declare": false,
            "start": 96,
            "end": 109
          }
        ],
        "start": 69,
        "end": 111
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 55,
      "end": 111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 111
}
```
