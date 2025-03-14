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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "zzz",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "raw": "123",
              "value": 123
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
      "type": "ExportDefaultDeclaration",
      "start": 24,
      "end": 43,
      "declaration": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "zzz",
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
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 38,
                  "end": 44
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "decorators": [],
          "name": "zzz",
          "optional": false
        }
      },
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 71,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "raw": "\"./b\"",
        "value": "./b"
      },
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
            "optional": false
          }
        }
      ]
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
          "definite": false,
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
                  "optional": false
                }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 93,
                  "end": 95,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 131,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 114,
          "end": 128,
          "exported": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 114,
            "end": 117,
            "decorators": [],
            "name": "zzz",
            "optional": false
          }
        }
      ]
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "\"./a\"",
        "value": "./a"
      },
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
            "optional": false
          }
        }
      ]
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
          "definite": false,
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
                  "optional": false
                }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 44,
                  "end": 46,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 56,
      "end": 86,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 85,
        "raw": "\"./b\"",
        "value": "./b"
      },
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
            "optional": false
          }
        }
      ]
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
        "optional": false
      }
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
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
