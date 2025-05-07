__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 80,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 78,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 62,
        "end": 78,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 75,
          "end": 78,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 74,
          "decorators": [],
          "name": "ThingA",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 23,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 20,
          "end": 23,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "decorators": [],
          "name": "ThingB",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 66,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 31,
        "raw": "\"./ThingA\"",
        "value": "./ThingA",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 14,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 14,
            "decorators": [],
            "name": "ThingA",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 14,
            "decorators": [],
            "name": "ThingA",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 65,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 64,
        "raw": "\"./ThingB\"",
        "value": "./ThingB",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 41,
          "end": 47,
          "exported": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "decorators": [],
            "name": "ThingB",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "decorators": [],
            "name": "ThingB",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 110,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 34,
        "raw": "\"./Things\"",
        "value": "./Things",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "things",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 110,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 44,
        "end": 110,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 55,
          "end": 110,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 61,
              "end": 108,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 68,
                "end": 74,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 77,
                "end": 107,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 104,
                  "end": 107,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 78,
                    "end": 98,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 83,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 85,
                        "end": 98,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 85,
                          "end": 98,
                          "left": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 91,
                            "decorators": [],
                            "name": "things",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 98,
                            "decorators": [],
                            "name": "ThingA",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 54,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
