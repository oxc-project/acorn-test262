__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 43,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "name": "Type",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 19,
          "end": 42,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 21,
              "end": 40,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 40,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 25,
                  "end": 40,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 27,
                      "end": 38,
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "MemberExpression",
                        "start": 28,
                        "end": 34,
                        "object": {
                          "type": "Identifier",
                          "start": 28,
                          "end": 32,
                          "name": "Enum",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 33,
                          "end": 34,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 35,
                        "end": 38,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 37,
                          "end": 38,
                          "literal": {
                            "type": "Literal",
                            "start": 37,
                            "end": 38,
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
      "attributes": [],
      "exportKind": "type"
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
  "end": 77,
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
            "name": "Type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "name": "Type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                        "name": "Type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
        "kind": "const",
        "declare": false
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
