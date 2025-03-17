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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 29,
        "value": "highlight.js",
        "raw": "\"highlight.js\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 159,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 34,
            "end": 106,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 41,
              "end": 106,
              "id": {
                "type": "Identifier",
                "start": 51,
                "end": 63,
                "name": "HighlightAPI",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 64,
                "end": 106,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 70,
                    "end": 102,
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 79,
                      "name": "highlight",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 92,
                        "name": "code",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 84,
                          "end": 92,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 86,
                            "end": 92
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
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
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 133,
                  "name": "hljs",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 133,
                        "name": "HighlightAPI",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 137,
            "end": 157,
            "declaration": {
              "type": "Identifier",
              "start": 152,
              "end": 156,
              "name": "hljs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "name": "hljs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 31,
        "value": "highlight.js",
        "raw": "\"highlight.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 33,
      "end": 53,
      "declaration": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "name": "hljs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 66,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "name": "hljs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 40,
        "value": "highlight.js/lib/core",
        "raw": "\"highlight.js/lib/core\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 65,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 64,
        "callee": {
          "type": "MemberExpression",
          "start": 42,
          "end": 56,
          "object": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "name": "hljs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 56,
            "name": "highlight",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 57,
            "end": 63,
            "value": "code",
            "raw": "\"code\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
