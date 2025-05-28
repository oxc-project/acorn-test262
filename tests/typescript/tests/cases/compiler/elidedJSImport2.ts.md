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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 32,
        "value": "./other.js",
        "raw": "\"./other.js\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 70,
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
      ],
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 69,
        "value": "./other.js",
        "raw": "\"./other.js\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 71,
      "end": 107,
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
      ],
      "source": {
        "type": "Literal",
        "start": 94,
        "end": 106,
        "value": "./other.js",
        "raw": "\"./other.js\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 129,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 128,
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
            "callee": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 152,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 151,
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
            "callee": {
              "type": "MemberExpression",
              "start": 140,
              "end": 149,
              "object": {
                "type": "Identifier",
                "start": 140,
                "end": 145,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 180,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 179,
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
            "callee": {
              "type": "Identifier",
              "start": 167,
              "end": 177,
              "decorators": [],
              "name": "defaultFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 41,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 41,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 39,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 32,
                  "end": 38
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
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 92,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 58,
        "end": 92,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 71,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 72,
          "end": 92,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 78,
              "end": 90,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 83,
                  "end": 89
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 35,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 35,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 33,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 29,
                "end": 32,
                "value": 2.4,
                "raw": "2.4"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 37,
      "end": 80,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 52,
        "end": 80,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 62,
          "end": 80,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 68,
              "end": 78,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 74,
                "end": 77,
                "value": 1.2,
                "raw": "1.2"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
