__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 32,
        "raw": "\"./other.js\"",
        "value": "./other.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 70,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 69,
        "raw": "\"./other.js\"",
        "value": "./other.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 41,
          "end": 51,
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 71,
      "end": 107,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 94,
        "end": 106,
        "raw": "\"./other.js\"",
        "value": "./other.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 78,
          "end": 88,
          "local": {
            "type": "Identifier",
            "start": 78,
            "end": 88,
            "decorators": [],
            "name": "defaultFoo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 119,
            "end": 128,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 140,
            "end": 151,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 140,
              "end": 149,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 140,
                "end": 145,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 163,
            "end": 179,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 167,
              "end": 177,
              "decorators": [],
              "name": "defaultFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 41,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 41,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 39,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 32,
                  "end": 38
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 92,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 58,
        "end": 92,
        "body": {
          "type": "TSInterfaceBody",
          "start": 72,
          "end": 92,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 78,
              "end": 90,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 83,
                  "end": 89
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 71,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
  "end": 80,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 35,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 35,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 33,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 29,
                "end": 32,
                "raw": "2.4",
                "value": 2.4,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
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
      "type": "ExportDefaultDeclaration",
      "start": 37,
      "end": 80,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 52,
        "end": 80,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 62,
          "end": 80,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 68,
              "end": 78,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 74,
                "end": 77,
                "raw": "1.2",
                "value": 1.2,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 61,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
