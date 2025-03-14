file.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 40,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 40,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 38,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "member",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
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
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
reexport.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "\"./file\"",
        "value": "./file"
      }
    }
  ],
  "sourceType": "module"
}
```
augment.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
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
        "raw": "\"./reexport\"",
        "value": "./reexport"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 110,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 63,
        "end": 110,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 69,
            "end": 108,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 76,
              "end": 108,
              "body": {
                "type": "TSEnumBody",
                "start": 85,
                "end": 108,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 95,
                    "end": 96,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 98,
                    "end": 99,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 101,
                    "end": 102,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 102,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 50,
        "end": 62,
        "raw": "\"./reexport\"",
        "value": "./reexport"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 135,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 135,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 129,
                  "end": 135,
                  "left": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 131,
                    "decorators": [],
                    "name": "ns",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 135,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
