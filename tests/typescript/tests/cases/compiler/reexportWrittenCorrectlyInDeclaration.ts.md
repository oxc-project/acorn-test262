__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ThingA",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 74
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 75,
          "end": 78
        },
        "abstract": false,
        "declare": false,
        "start": 62,
        "end": 78
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 80
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ThingB",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 19
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 20,
          "end": 23
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 23
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 24
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ThingA",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 14
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ThingA",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 14
          },
          "exportKind": "value",
          "start": 8,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ThingA",
        "raw": "\"./ThingA\"",
        "start": 21,
        "end": 31
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ThingB",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 47
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ThingB",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 47
          },
          "exportKind": "value",
          "start": 41,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ThingB",
        "raw": "\"./ThingB\"",
        "start": 54,
        "end": 64
      },
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "things",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Things",
        "raw": "\"./Things\"",
        "start": 24,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 54
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 74
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "things",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 85,
                            "end": 91
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ThingA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 92,
                            "end": 98
                          },
                          "start": 85,
                          "end": 98
                        },
                        "typeArguments": null,
                        "start": 85,
                        "end": 98
                      },
                      "start": 83,
                      "end": 98
                    },
                    "start": 78,
                    "end": 98
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 104,
                  "end": 107
                },
                "id": null,
                "generator": false,
                "start": 77,
                "end": 107
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 61,
              "end": 108
            }
          ],
          "start": 55,
          "end": 110
        },
        "abstract": false,
        "declare": false,
        "start": 44,
        "end": 110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 110
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
