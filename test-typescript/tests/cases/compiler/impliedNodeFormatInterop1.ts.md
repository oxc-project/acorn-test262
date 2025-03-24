__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 159,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 159,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 34,
            "end": 106,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 41,
              "end": 106,
              "body": {
                "type": "TSInterfaceBody",
                "start": 64,
                "end": 106,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 70,
                    "end": 102,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 79,
                      "decorators": [],
                      "name": "highlight",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 92,
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 84,
                          "end": 92,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 86,
                            "end": 92
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 101,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 95,
                        "end": 101
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 51,
                "end": 63,
                "decorators": [],
                "name": "HighlightAPI",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 109,
            "end": 134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 115,
                "end": 133,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 133,
                  "decorators": [],
                  "name": "hljs",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 133,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 133,
                        "decorators": [],
                        "name": "HighlightAPI",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 137,
            "end": 157,
            "declaration": {
              "type": "Identifier",
              "start": 152,
              "end": 156,
              "decorators": [],
              "name": "hljs",
              "optional": false,
              "typeAnnotation": null
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 29,
        "raw": "\"highlight.js\"",
        "value": "highlight.js"
      }
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
  "end": 54,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 31,
        "raw": "\"highlight.js\"",
        "value": "highlight.js"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "hljs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 33,
      "end": 53,
      "declaration": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "hljs",
        "optional": false,
        "typeAnnotation": null
      },
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
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 40,
        "raw": "\"highlight.js/lib/core\"",
        "value": "highlight.js/lib/core"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "hljs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 65,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 64,
        "arguments": [
          {
            "type": "Literal",
            "start": 57,
            "end": 63,
            "raw": "\"code\"",
            "value": "code"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 42,
          "end": 56,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "hljs",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 56,
            "decorators": [],
            "name": "highlight",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
