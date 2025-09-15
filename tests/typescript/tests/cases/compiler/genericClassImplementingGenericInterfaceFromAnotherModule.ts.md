__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 41
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 42,
                    "end": 43
                  }
                ],
                "start": 41,
                "end": 44
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 48
              },
              "declare": false,
              "start": 27,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 48
          }
        ],
        "start": 14,
        "end": 50
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 64
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 87
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 89
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 88,
                    "end": 89
                  }
                ],
                "start": 87,
                "end": 90
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 105
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 110
                    },
                    "optional": false,
                    "computed": false,
                    "start": 102,
                    "end": 110
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 111,
                          "end": 112
                        },
                        "typeArguments": null,
                        "start": 111,
                        "end": 112
                      }
                    ],
                    "start": 110,
                    "end": 113
                  },
                  "start": 102,
                  "end": 113
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 114,
                "end": 117
              },
              "abstract": false,
              "declare": false,
              "start": 78,
              "end": 117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 71,
            "end": 117
          }
        ],
        "start": 65,
        "end": 119
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 51,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
