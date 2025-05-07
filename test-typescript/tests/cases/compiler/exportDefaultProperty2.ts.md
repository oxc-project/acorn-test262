__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 185,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 101,
                "end": 107
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 111,
      "end": 163,
      "body": {
        "type": "TSModuleBlock",
        "start": 123,
        "end": 163,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 129,
            "end": 161,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 136,
              "end": 161,
              "body": {
                "type": "TSInterfaceBody",
                "start": 148,
                "end": 161,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 150,
                    "end": 159,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 151,
                      "end": 159,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 153,
                        "end": 159
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 165,
      "end": 184,
      "declaration": {
        "type": "MemberExpression",
        "start": 180,
        "end": 183,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 180,
          "end": 181,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 43,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 31,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 34,
            "end": 42,
            "properties": [
              {
                "type": "Property",
                "start": 36,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
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
