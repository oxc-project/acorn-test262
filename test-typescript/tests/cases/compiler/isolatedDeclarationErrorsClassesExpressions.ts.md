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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 50,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 50,
            "definite": false,
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
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 25,
                "end": 50,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 31,
                    "end": 48,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 34,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 128,
      "async": false,
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 99,
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "start": 75,
              "end": 99,
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 80,
                  "end": 91,
                  "argument": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 153,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 138,
        "end": 153,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 149,
          "end": 153,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 155,
      "end": 193,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 162,
        "end": 193,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 189,
          "end": 193,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 180,
          "end": 188,
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
          "callee": {
            "type": "Identifier",
            "start": 180,
            "end": 182,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 195,
      "end": 246,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 202,
        "end": 246,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 208,
            "end": 246,
            "definite": false,
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
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 225,
                      "end": 227,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [],
                    "id": null,
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  {
                    "type": "ClassExpression",
                    "start": 229,
                    "end": 236,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 234,
                      "end": 236,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [],
                    "id": null,
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 241,
                "end": 246,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 246,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
