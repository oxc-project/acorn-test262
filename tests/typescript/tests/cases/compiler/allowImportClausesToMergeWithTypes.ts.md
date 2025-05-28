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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "zzz",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 24,
      "end": 43,
      "declaration": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "zzz",
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
          "decorators": [],
          "name": "zzz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
            "decorators": [],
            "name": "zzz",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 98,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "zzz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 93,
                  "end": 95,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "zzz",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "zzz",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
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
            "decorators": [],
            "name": "zzz",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 49,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "zzz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 44,
                  "end": 46,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "zzz",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "originalZZZ",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "originalZZZ",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 126,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 121,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                  "decorators": [],
                  "name": "originalZZZ",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
