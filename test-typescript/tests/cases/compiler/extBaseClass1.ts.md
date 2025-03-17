__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 95,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 55,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 55,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 55,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 37,
                    "end": 49,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 46,
                      "end": 48,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
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
            "start": 61,
            "end": 93,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 68,
              "end": 93,
              "id": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 86,
                "end": 93,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 97,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 106,
        "end": 147,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 145,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 119,
              "end": 145,
              "id": {
                "type": "Identifier",
                "start": 125,
                "end": 127,
                "name": "C2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 145,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 149,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 157,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 158,
        "end": 201,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 164,
            "end": 199,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 171,
              "end": 199,
              "id": {
                "type": "Identifier",
                "start": 177,
                "end": 179,
                "name": "C3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 188,
                "end": 191,
                "object": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 192,
                "end": 199,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
