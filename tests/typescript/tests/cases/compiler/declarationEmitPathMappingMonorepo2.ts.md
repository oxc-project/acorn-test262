__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 24,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 23,
        "value": "./utils",
        "raw": "\"./utils\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 72,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 34,
          "end": 52,
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 41,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 45,
            "end": 52,
            "decorators": [],
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 60,
        "end": 71,
        "value": "./SvgIcon",
        "raw": "\"./SvgIcon\""
      },
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
  "end": 268,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 29,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 29,
            "decorators": [],
            "name": "StyledComponentProps",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 29,
            "decorators": [],
            "name": "StyledComponentProps",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 53,
        "value": "@ts-bug/styles",
        "raw": "\"@ts-bug/styles\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 150,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 62,
        "end": 150,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 84,
          "decorators": [],
          "name": "SvgIconProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 93,
            "end": 121,
            "expression": {
              "type": "Identifier",
              "start": 93,
              "end": 113,
              "decorators": [],
              "name": "StyledComponentProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 113,
              "end": 121,
              "params": [
                {
                  "type": "TSLiteralType",
                  "start": 114,
                  "end": 120,
                  "literal": {
                    "type": "Literal",
                    "start": 114,
                    "end": 120,
                    "value": "root",
                    "raw": "\"root\""
                  }
                }
              ]
            }
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 122,
          "end": 150,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 128,
              "end": 148,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 137,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 139,
                  "end": 147,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 151,
      "end": 205,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 158,
        "end": 205,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 181,
          "decorators": [],
          "name": "SomeInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 182,
          "end": 205,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 188,
              "end": 203,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 188,
                "end": 194,
                "decorators": [],
                "name": "myProp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 194,
                "end": 202,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 196,
                  "end": 202
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 243,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 242,
            "decorators": [],
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 242,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 242,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 242,
                  "decorators": [],
                  "name": "SomeInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 244,
      "end": 267,
      "declaration": {
        "type": "Identifier",
        "start": 259,
        "end": 266,
        "decorators": [],
        "name": "SvgIcon",
        "optional": false,
        "typeAnnotation": null
      },
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
  "end": 115,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "SvgIcon",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "value": "./SvgIcon",
        "raw": "\"./SvgIcon\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 114,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 40,
        "end": 114,
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 62,
          "decorators": [],
          "name": "createSvgIcon",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 63,
            "end": 75,
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              }
            }
          },
          {
            "type": "Identifier",
            "start": 77,
            "end": 96,
            "decorators": [],
            "name": "displayName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 97,
          "end": 113,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 99,
            "end": 113,
            "exprName": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "decorators": [],
              "name": "SvgIcon",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
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
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 106,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 106,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 37,
          "decorators": [],
          "name": "StyledComponentProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 37,
          "end": 62,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 38,
              "end": 61,
              "name": {
                "type": "Identifier",
                "start": 38,
                "end": 46,
                "decorators": [],
                "name": "ClassKey",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 63,
          "end": 106,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 69,
              "end": 104,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 69,
                "end": 76,
                "decorators": [],
                "name": "classes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 103,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 85,
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 85,
                    "end": 103,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 86,
                        "end": 94,
                        "typeName": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 94,
                          "decorators": [],
                          "name": "ClassKey",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 96,
                        "end": 102
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 104,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 51,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 22,
            "decorators": [],
            "name": "createSvgIcon",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 22,
            "decorators": [],
            "name": "createSvgIcon",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 50,
        "value": "@ts-bug/core/utils",
        "raw": "\"@ts-bug/core/utils\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 52,
      "end": 103,
      "declaration": {
        "type": "CallExpression",
        "start": 67,
        "end": 102,
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 80,
          "decorators": [],
          "name": "createSvgIcon",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 81,
            "end": 88,
            "value": "Hello",
            "raw": "\"Hello\""
          },
          {
            "type": "Literal",
            "start": 90,
            "end": 101,
            "value": "ArrowLeft",
            "raw": "\"ArrowLeft\""
          }
        ],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
