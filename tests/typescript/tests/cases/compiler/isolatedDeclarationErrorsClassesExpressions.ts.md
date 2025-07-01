__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 34
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      },
                      "start": 34,
                      "end": 42
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 45,
                      "end": 47
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 31,
                    "end": 48
                  }
                ],
                "start": 25,
                "end": 50
              },
              "abstract": false,
              "declare": false,
              "start": 19,
              "end": 50
            },
            "definite": false,
            "start": 13,
            "end": 50
          }
        ],
        "declare": false,
        "start": 7,
        "end": 50
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 64
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
              "start": 65,
              "end": 66
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 84
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 86,
                        "end": 89
                      },
                      "start": 86,
                      "end": 91
                    },
                    "start": 84,
                    "end": 91
                  },
                  "value": null,
                  "start": 80,
                  "end": 91
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 96,
                  "end": 99
                },
                "start": 93,
                "end": 99
              },
              "start": 75,
              "end": 99
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 99
          }
        ],
        "start": 64,
        "end": 100
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cls",
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
                "start": 106,
                "end": 107
              },
              "typeArguments": null,
              "start": 106,
              "end": 107
            },
            "start": 104,
            "end": 107
          },
          "start": 101,
          "end": 107
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
              "name": "cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
            },
            "start": 115,
            "end": 126
          }
        ],
        "start": 109,
        "end": 128
      },
      "expression": false,
      "start": 53,
      "end": 128
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 148
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 149,
          "end": 153
        },
        "abstract": false,
        "declare": false,
        "start": 138,
        "end": 153
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 131,
      "end": 153
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 171
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 182
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 187
            }
          ],
          "optional": false,
          "start": 180,
          "end": 188
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 189,
          "end": 193
        },
        "abstract": false,
        "declare": false,
        "start": 162,
        "end": 193
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 155,
      "end": 193
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "classes",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 215
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ClassExpression",
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 225,
                      "end": 227
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 219,
                    "end": 227
                  },
                  {
                    "type": "ClassExpression",
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 234,
                      "end": 236
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 229,
                    "end": 236
                  }
                ],
                "start": 218,
                "end": 237
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 246
                },
                "typeArguments": null,
                "start": 241,
                "end": 246
              },
              "start": 218,
              "end": 246
            },
            "definite": false,
            "start": 208,
            "end": 246
          }
        ],
        "declare": false,
        "start": 202,
        "end": 246
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 195,
      "end": 246
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 246
}
```
