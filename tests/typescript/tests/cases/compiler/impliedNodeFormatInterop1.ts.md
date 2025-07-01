__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "highlight.js",
        "raw": "\"highlight.js\"",
        "start": 15,
        "end": 29
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HighlightAPI",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 63
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "highlight",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 79
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 86,
                            "end": 92
                          },
                          "start": 84,
                          "end": 92
                        },
                        "start": 80,
                        "end": 92
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 95,
                        "end": 101
                      },
                      "start": 93,
                      "end": 101
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 70,
                    "end": 102
                  }
                ],
                "start": 64,
                "end": 106
              },
              "declare": false,
              "start": 41,
              "end": 106
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 34,
            "end": 106
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hljs",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HighlightAPI",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 133
                      },
                      "typeArguments": null,
                      "start": 121,
                      "end": 133
                    },
                    "start": 119,
                    "end": 133
                  },
                  "start": 115,
                  "end": 133
                },
                "init": null,
                "definite": false,
                "start": 115,
                "end": 133
              }
            ],
            "declare": false,
            "start": 109,
            "end": 134
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "hljs",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 156
            },
            "exportKind": "value",
            "start": 137,
            "end": 157
          }
        ],
        "start": 30,
        "end": 159
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 159
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 160
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "hljs",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "highlight.js",
        "raw": "\"highlight.js\"",
        "start": 17,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "hljs",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 52
      },
      "exportKind": "value",
      "start": 33,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 54
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "hljs",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "highlight.js/lib/core",
        "raw": "\"highlight.js/lib/core\"",
        "start": 17,
        "end": 40
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "hljs",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "highlight",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 56
          },
          "optional": false,
          "computed": false,
          "start": 42,
          "end": 56
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "code",
            "raw": "\"code\"",
            "start": 57,
            "end": 63
          }
        ],
        "optional": false,
        "start": 42,
        "end": 64
      },
      "directive": null,
      "start": 42,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
