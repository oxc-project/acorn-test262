__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 55,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 55,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 55,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 25,
              "end": 53,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 32,
                "end": 53,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 38,
                    "end": 52,
                    "id": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 41,
                      "decorators": [],
                      "name": "sym",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 44,
                      "end": 52,
                      "callee": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 50,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 100,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 63,
        "end": 100,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 72,
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 75,
          "end": 99,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 77,
              "end": 97,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 79,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 81,
                  "end": 97,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 83,
                      "end": 95,
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "MemberExpression",
                        "start": 84,
                        "end": 91,
                        "object": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 87,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 91,
                          "decorators": [],
                          "name": "sym",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 92,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 94,
                          "end": 95,
                          "literal": {
                            "type": "Literal",
                            "start": 94,
                            "end": 95,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
      "exportKind": "type",
      "attributes": []
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
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 34,
        "value": "./type",
        "raw": "\"./type\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 76,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 76,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 56,
              "end": 75,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 58,
                  "end": 73,
                  "argument": {
                    "type": "TSAsExpression",
                    "start": 62,
                    "end": 72,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 62,
                      "end": 64,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
