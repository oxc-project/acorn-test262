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
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "I2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "prop2",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 135,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 91,
        "end": 135,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 110,
            "end": 111,
            "expression": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 112,
          "end": 135,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 118,
              "end": 133,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 125,
                "end": 132,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 190,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 143,
        "end": 190,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 149,
          "end": 151,
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 163,
            "end": 165,
            "expression": {
              "type": "Identifier",
              "start": 163,
              "end": 165,
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 166,
          "end": 190,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 172,
              "end": 188,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 177,
                "decorators": [],
                "name": "prop2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 180,
                "end": 187,
                "value": "world",
                "raw": "\"world\""
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
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "cValInterface",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
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
      "start": 142,
      "end": 168,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 149,
        "end": 168,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 153,
            "end": 167,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "decorators": [],
              "name": "cVal",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 160,
              "end": 167,
              "callee": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "C",
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
