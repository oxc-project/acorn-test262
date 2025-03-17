__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 40,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 25,
              "end": 38,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 29,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 31,
                  "end": 37
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 83,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 48,
        "end": 83,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 60,
          "name": "I2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 61,
          "end": 83,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 67,
              "end": 81,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 72,
                "name": "prop2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 74,
                  "end": 80
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 135,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 91,
        "end": 135,
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 112,
          "end": 135,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 118,
              "end": 133,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 125,
                "end": 132,
                "value": "hello",
                "raw": "\"hello\""
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 110,
            "end": 111,
            "expression": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 190,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 143,
        "end": 190,
        "id": {
          "type": "Identifier",
          "start": 149,
          "end": 151,
          "name": "C2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 166,
          "end": 190,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 172,
              "end": 188,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 177,
                "name": "prop2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 180,
                "end": 187,
                "value": "world",
                "raw": "\"world\""
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 163,
            "end": 165,
            "expression": {
              "type": "Identifier",
              "start": 163,
              "end": 165,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
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
  "end": 168,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 35,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 141,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 118,
        "end": 141,
        "id": {
          "type": "Identifier",
          "start": 123,
          "end": 136,
          "name": "cValInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 139,
          "end": 140,
          "typeName": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 142,
      "end": 168,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 149,
        "end": 168,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 153,
            "end": 167,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "name": "cVal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 160,
              "end": 167,
              "callee": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
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
