__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 14,
          "end": 16
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 16
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 16
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 17
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 25
          },
          "start": 7,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./defaultPath",
        "raw": "\"./defaultPath\"",
        "start": 31,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "anotherModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 73
          },
          "start": 55,
          "end": 73
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./anotherModule",
        "raw": "\"./anotherModule\"",
        "start": 79,
        "end": 96
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 97
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 114
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "anotherModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 135
                      },
                      "typeArguments": null,
                      "start": 115,
                      "end": 135
                    }
                  ],
                  "start": 114,
                  "end": 136
                },
                "start": 107,
                "end": 136
              },
              "start": 105,
              "end": 136
            },
            "start": 103,
            "end": 136
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./defaultPath",
              "raw": "\"./defaultPath\"",
              "start": 146,
              "end": 161
            },
            "options": null,
            "phase": null,
            "start": 139,
            "end": 162
          },
          "definite": false,
          "start": 103,
          "end": 162
        }
      ],
      "declare": false,
      "start": 99,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 170
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./defaultPath",
                "raw": "\"./defaultPath\"",
                "start": 180,
                "end": 195
              },
              "options": null,
              "phase": null,
              "start": 173,
              "end": 196
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 207
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anotherModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 228
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 228
                  }
                ],
                "start": 207,
                "end": 229
              },
              "start": 200,
              "end": 229
            },
            "start": 173,
            "end": 229
          },
          "definite": false,
          "start": 168,
          "end": 229
        }
      ],
      "declare": false,
      "start": 164,
      "end": 230
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 246
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 247,
                      "end": 250
                    }
                  ],
                  "start": 246,
                  "end": 251
                },
                "start": 239,
                "end": 251
              },
              "start": 237,
              "end": 251
            },
            "start": 235,
            "end": 251
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./defaultPath",
              "raw": "\"./defaultPath\"",
              "start": 261,
              "end": 276
            },
            "options": null,
            "phase": null,
            "start": 254,
            "end": 277
          },
          "definite": false,
          "start": 235,
          "end": 277
        }
      ],
      "declare": false,
      "start": 231,
      "end": 278
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 278
}
```
