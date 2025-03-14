component.d.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 118,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 39,
        "end": 118,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 94,
          "end": 118,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 100,
              "end": 116,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 112,
                "decorators": [],
                "name": "internalProp",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              },
              "value": null
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 59,
          "decorators": [],
          "name": "MyComp",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 71,
          "end": 86,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 71,
            "end": 76,
            "decorators": [],
            "name": "React",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 77,
            "end": 86,
            "decorators": [],
            "name": "Component",
            "optional": false
          }
        },
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
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 90,
              "end": 92,
              "members": []
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 59,
          "end": 62,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 60,
              "end": 61,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 120,
      "end": 174,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 127,
        "end": 174,
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
              "key": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 149,
                "end": 157,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 151,
                  "end": 157
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 163,
              "end": 172,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 164,
                "end": 172,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 166,
                  "end": 172
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "decorators": [],
          "name": "Prop",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
