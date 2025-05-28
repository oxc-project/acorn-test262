__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 50,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ClassExpression",
              "start": 19,
              "end": 50,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 25,
                "end": 50,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 31,
                    "end": 48,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 34,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "start": 45,
                      "end": 47,
                      "value": "",
                      "raw": "\"\""
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 99,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSConstructorType",
              "start": 75,
              "end": 99,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 80,
                  "end": 91,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 86,
                      "end": 91,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 86,
                        "end": 89
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 96,
                  "end": 99
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 101,
          "end": 107,
          "decorators": [],
          "name": "cls",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 106,
              "end": 107,
              "typeName": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 128,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 115,
            "end": 126,
            "argument": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 153,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 138,
        "end": 153,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 144,
          "end": 148,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 149,
          "end": 153,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 155,
      "end": 193,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 162,
        "end": 193,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 171,
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "start": 180,
          "end": 188,
          "callee": {
            "type": "Identifier",
            "start": 180,
            "end": 182,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 183,
              "end": 187,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 189,
          "end": 193,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 195,
      "end": 246,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 202,
        "end": 246,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 208,
            "end": 246,
            "id": {
              "type": "Identifier",
              "start": 208,
              "end": 215,
              "decorators": [],
              "name": "classes",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 218,
              "end": 246,
              "expression": {
                "type": "ArrayExpression",
                "start": 218,
                "end": 237,
                "elements": [
                  {
                    "type": "ClassExpression",
                    "start": 219,
                    "end": 227,
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 225,
                      "end": 227,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  {
                    "type": "ClassExpression",
                    "start": 229,
                    "end": 236,
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 234,
                      "end": 236,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 241,
                "end": 246,
                "typeName": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 246,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
