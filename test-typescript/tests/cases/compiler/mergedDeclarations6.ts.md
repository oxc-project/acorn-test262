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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 124,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 124,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 46,
              "accessibility": "protected",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 40,
                "decorators": [],
                "name": "protected",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 52,
              "end": 122,
              "accessibility": "protected",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 74,
                "decorators": [],
                "name": "setProtected",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 74,
                "end": 122,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 85,
                  "end": 122,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 95,
                      "end": 116,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 95,
                        "end": 115,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 95,
                          "end": 109,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 95,
                            "end": 99
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 109,
                            "decorators": [],
                            "name": "protected",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 115,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 75,
                    "end": 83,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 78,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 80,
                        "end": 83
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
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
  "end": 136,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 24,
      "end": 68,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 68,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 51,
            "end": 66,
            "body": {
              "type": "TSInterfaceBody",
              "start": 63,
              "end": 66,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 39,
        "end": 44,
        "raw": "\"./a\"",
        "value": "./a"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 70,
      "end": 136,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 77,
        "end": 136,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 95,
          "end": 136,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 134,
              "accessibility": "protected",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 123,
                "decorators": [],
                "name": "setProtected",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 123,
                "end": 134,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 126,
                  "end": 134,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
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
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
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
