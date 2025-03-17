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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ClassExpression",
              "start": 19,
              "end": 50,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 25,
                "end": 50,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 31,
                    "end": 48,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 34,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 45,
                      "end": 47,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "name": "id",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 101,
          "end": 107,
          "name": "cls",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "argument": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 153,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 138,
        "end": 153,
        "id": {
          "type": "Identifier",
          "start": 144,
          "end": 148,
          "name": "Base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 149,
          "end": 153,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 155,
      "end": 193,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 162,
        "end": 193,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 171,
          "name": "Mix",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 180,
          "end": 188,
          "callee": {
            "type": "Identifier",
            "start": 180,
            "end": 182,
            "name": "id",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 183,
              "end": 187,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 189,
          "end": 193,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 195,
      "end": 246,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 202,
        "end": 246,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 208,
            "end": 246,
            "id": {
              "type": "Identifier",
              "start": 208,
              "end": 215,
              "name": "classes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "id": null,
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 225,
                      "end": 227,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  {
                    "type": "ClassExpression",
                    "start": 229,
                    "end": 236,
                    "id": null,
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 234,
                      "end": 236,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
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
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
