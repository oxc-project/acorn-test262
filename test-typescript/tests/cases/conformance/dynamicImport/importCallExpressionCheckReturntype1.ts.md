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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 14,
          "end": 16,
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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
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
  "end": 279,
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
            "name": "defaultModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "anotherModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 136,
            "name": "p1",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "anotherModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 170,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "options": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 229,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 207,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "anotherModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 251,
            "name": "p3",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
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
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
