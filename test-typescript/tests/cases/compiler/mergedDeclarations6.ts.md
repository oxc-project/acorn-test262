__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 124,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 124,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 124,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 46,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 40,
                "name": "protected",
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
                "start": 40,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 42,
                  "end": 45
                }
              },
              "accessibility": "protected"
            },
            {
              "type": "MethodDefinition",
              "start": 52,
              "end": 122,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 74,
                "name": "setProtected",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 74,
                "end": 122,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 75,
                    "end": 83,
                    "name": "val",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 78,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 80,
                        "end": 83
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 85,
                  "end": 122,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 95,
                      "end": 116,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 95,
                        "end": 115,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 95,
                          "end": 109,
                          "object": {
                            "type": "ThisExpression",
                            "start": 95,
                            "end": 99
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 109,
                            "name": "protected",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 115,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "protected"
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
  "end": 136,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 24,
      "end": 68,
      "id": {
        "type": "Literal",
        "start": 39,
        "end": 44,
        "value": "./a",
        "raw": "\"./a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 68,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 51,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 63,
              "end": 66,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 70,
      "end": 136,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 77,
        "end": 136,
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 95,
          "end": 136,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 134,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 123,
                "name": "setProtected",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 123,
                "end": 134,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 126,
                  "end": 134,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "protected"
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
