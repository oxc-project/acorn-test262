__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 118,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 39,
        "end": 118,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 59,
          "name": "MyComp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 71,
          "end": 86,
          "object": {
            "type": "Identifier",
            "start": 71,
            "end": 76,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 77,
            "end": 86,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 94,
          "end": 118,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 100,
              "end": 116,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 112,
                "name": "internalProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 112,
                "end": 115,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 115,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 59,
          "end": 62,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 60,
              "end": 61,
              "name": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 86,
          "end": 93,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 87,
              "end": 88,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeLiteral",
              "start": 90,
              "end": 92,
              "members": []
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 120,
      "end": 174,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 127,
        "end": 174,
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "name": "Prop",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 142,
          "end": 174,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 148,
              "end": 158,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 149,
                "end": 157,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 151,
                  "end": 157
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 163,
              "end": 172,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 164,
                "end": 172,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 166,
                  "end": 172
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
