__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 17,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 16,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 16,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 14,
          "end": 16,
          "body": []
        },
        "abstract": false,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "abstract": false,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 25,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "decorators": [],
            "name": "defaultModule",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 46,
        "value": "./defaultPath",
        "raw": "\"./defaultPath\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 48,
      "end": 97,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 55,
          "end": 73,
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 73,
            "decorators": [],
            "name": "anotherModule",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 79,
        "end": 96,
        "value": "./anotherModule",
        "raw": "\"./anotherModule\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 163,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 136,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 114,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 114,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 115,
                      "end": 135,
                      "exprName": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 135,
                        "decorators": [],
                        "name": "anotherModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "start": 139,
            "end": 162,
            "source": {
              "type": "Literal",
              "start": 146,
              "end": 161,
              "value": "./defaultPath",
              "raw": "\"./defaultPath\""
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 230,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 170,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 173,
            "end": 229,
            "expression": {
              "type": "ImportExpression",
              "start": 173,
              "end": 196,
              "source": {
                "type": "Literal",
                "start": 180,
                "end": 195,
                "value": "./defaultPath",
                "raw": "\"./defaultPath\""
              },
              "options": null,
              "phase": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 229,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 207,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 207,
                "end": 229,
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "start": 208,
                    "end": 228,
                    "exprName": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 228,
                      "decorators": [],
                      "name": "anotherModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 278,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 251,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 239,
                "end": 251,
                "typeName": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 246,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 246,
                  "end": 251,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 247,
                      "end": 250
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "start": 254,
            "end": 277,
            "source": {
              "type": "Literal",
              "start": 261,
              "end": 276,
              "value": "./defaultPath",
              "raw": "\"./defaultPath\""
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
