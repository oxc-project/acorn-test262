__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 17,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "exports",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 69,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 57,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 57,
              "end": 69,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 67,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 84,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
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
        "start": 32,
        "end": 39,
        "decorators": [],
        "name": "exports",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 150,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 94,
        "end": 150,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 104,
          "end": 150,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 110,
              "end": 148,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": true,
              "key": {
                "type": "Identifier",
                "start": 110,
                "end": 118,
                "decorators": [],
                "name": "instance",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 119,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 121,
                  "end": 147,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 131,
                      "end": 141,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 132,
                        "end": 140,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 134,
                          "end": 140
                        }
                      }
                    }
                  ]
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
          "start": 100,
          "end": 103,
          "decorators": [],
          "name": "Sub",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 151,
      "end": 200,
      "body": {
        "type": "TSModuleBlock",
        "start": 177,
        "end": 200,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 183,
            "end": 198,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 192,
                "end": 195,
                "exported": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "decorators": [],
                  "name": "Sub",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "decorators": [],
                  "name": "Sub",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 176,
        "decorators": [],
        "name": "exports",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
