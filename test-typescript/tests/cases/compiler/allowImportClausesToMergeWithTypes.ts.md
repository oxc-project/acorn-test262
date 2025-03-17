__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "zzz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "value": 123,
              "raw": "123"
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
      "type": "ExportDefaultDeclaration",
      "start": 24,
      "end": 43,
      "declaration": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "name": "zzz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 132,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 47,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 15,
        "end": 47,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "name": "zzz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 29,
          "end": 47,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 35,
              "end": 45,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 38,
                  "end": 44
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 56,
          "end": 59,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 59,
            "name": "zzz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 85,
                  "name": "zzz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 88,
            "end": 97,
            "properties": [
              {
                "type": "Property",
                "start": 90,
                "end": 95,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 93,
                  "end": 95,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 103,
      "expression": {
        "type": "Identifier",
        "start": 99,
        "end": 102,
        "name": "zzz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 131,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 114,
          "end": 128,
          "local": {
            "type": "Identifier",
            "start": 114,
            "end": 117,
            "name": "zzz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
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
  "end": 126,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "zzz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 36,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 36,
                  "name": "zzz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 39,
            "end": 48,
            "properties": [
              {
                "type": "Property",
                "start": 41,
                "end": 46,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 44,
                  "end": 46,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 54,
      "expression": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "zzz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 56,
      "end": 86,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 63,
          "end": 74,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 74,
            "name": "originalZZZ",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 85,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 99,
      "expression": {
        "type": "Identifier",
        "start": 87,
        "end": 98,
        "name": "originalZZZ",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 121,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 121,
                  "name": "originalZZZ",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
