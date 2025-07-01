__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./utils",
        "raw": "\"./utils\"",
        "start": 14,
        "end": 23
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 41
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 52
          },
          "exportKind": "value",
          "start": 34,
          "end": 52
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./SvgIcon",
        "raw": "\"./SvgIcon\"",
        "start": 60,
        "end": 71
      },
      "exportKind": "value",
      "attributes": [],
      "start": 25,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledComponentProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 29
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledComponentProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 29
          },
          "importKind": "value",
          "start": 9,
          "end": 29
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@ts-bug/styles",
        "raw": "\"@ts-bug/styles\"",
        "start": 37,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SvgIconProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 84
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "StyledComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 113
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "root",
                    "raw": "\"root\"",
                    "start": 114,
                    "end": 120
                  },
                  "start": 114,
                  "end": 120
                }
              ],
              "start": 113,
              "end": 121
            },
            "start": 93,
            "end": 121
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 136
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 137,
                "end": 147
              },
              "accessibility": null,
              "static": false,
              "start": 128,
              "end": 148
            }
          ],
          "start": 122,
          "end": 150
        },
        "declare": false,
        "start": 62,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 55,
      "end": 150
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 181
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 194
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 196,
                  "end": 202
                },
                "start": 194,
                "end": 202
              },
              "accessibility": null,
              "static": false,
              "start": 188,
              "end": 203
            }
          ],
          "start": 182,
          "end": 205
        },
        "declare": false,
        "start": 158,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 151,
      "end": 205
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
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 242
                },
                "typeArguments": null,
                "start": 229,
                "end": 242
              },
              "start": 227,
              "end": 242
            },
            "start": 220,
            "end": 242
          },
          "init": null,
          "definite": false,
          "start": 220,
          "end": 242
        }
      ],
      "declare": true,
      "start": 206,
      "end": 243
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "SvgIcon",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 266
      },
      "exportKind": "value",
      "start": 244,
      "end": 267
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 268
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./SvgIcon",
        "raw": "\"./SvgIcon\"",
        "start": 20,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSvgIcon",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 62
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "start": 63,
            "end": 75
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "displayName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "start": 77,
            "end": 96
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SvgIcon",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 113
            },
            "typeArguments": null,
            "start": 99,
            "end": 113
          },
          "start": 97,
          "end": 113
        },
        "body": null,
        "expression": false,
        "start": 40,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
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
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 37
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 46
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 38,
              "end": 61
            }
          ],
          "start": 37,
          "end": 62
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classes",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 76
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 85
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ClassKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 94
                        },
                        "typeArguments": null,
                        "start": 86,
                        "end": 94
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 96,
                        "end": 102
                      }
                    ],
                    "start": 85,
                    "end": 103
                  },
                  "start": 79,
                  "end": 103
                },
                "start": 77,
                "end": 103
              },
              "accessibility": null,
              "static": false,
              "start": 69,
              "end": 104
            }
          ],
          "start": 63,
          "end": 106
        },
        "declare": false,
        "start": 7,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 107
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createSvgIcon",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createSvgIcon",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 22
          },
          "importKind": "value",
          "start": 9,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@ts-bug/core/utils",
        "raw": "\"@ts-bug/core/utils\"",
        "start": 30,
        "end": 50
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 51
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSvgIcon",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 80
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Hello",
            "raw": "\"Hello\"",
            "start": 81,
            "end": 88
          },
          {
            "type": "Literal",
            "value": "ArrowLeft",
            "raw": "\"ArrowLeft\"",
            "start": 90,
            "end": 101
          }
        ],
        "optional": false,
        "start": 67,
        "end": 102
      },
      "exportKind": "value",
      "start": 52,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
