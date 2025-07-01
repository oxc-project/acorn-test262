__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 15,
        "end": 17
      },
      "exportKind": "value",
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportAttributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 48
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 63
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "json",
                        "raw": "\"json\"",
                        "start": 65,
                        "end": 71
                      },
                      "start": 65,
                      "end": 71
                    },
                    "start": 63,
                    "end": 71
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 59,
                  "end": 71
                }
              ],
              "start": 49,
              "end": 77
            },
            "declare": false,
            "start": 21,
            "end": 77
          }
        ],
        "start": 15,
        "end": 79
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 79
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 95
          },
          "start": 88,
          "end": 95
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 101,
        "end": 106
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 118
          },
          "value": {
            "type": "Literal",
            "value": "not-json",
            "raw": "\"not-json\"",
            "start": 120,
            "end": 130
          },
          "start": 114,
          "end": 130
        }
      ],
      "importKind": "value",
      "start": 81,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 141
        },
        "prefix": true,
        "start": 134,
        "end": 141
      },
      "directive": null,
      "start": 134,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 160
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "./a",
                  "raw": "\"./a\"",
                  "start": 182,
                  "end": 187
                },
                "options": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "with",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 203
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 219,
                              "end": 223
                            },
                            "value": {
                              "type": "Literal",
                              "value": "not-json",
                              "raw": "\"not-json\"",
                              "start": 225,
                              "end": 235
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 219,
                            "end": 235
                          }
                        ],
                        "start": 205,
                        "end": 246
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 199,
                      "end": 246
                    }
                  ],
                  "start": 189,
                  "end": 253
                },
                "phase": null,
                "start": 175,
                "end": 254
              },
              "start": 169,
              "end": 254
            },
            "directive": null,
            "start": 169,
            "end": 255
          }
        ],
        "start": 163,
        "end": 257
      },
      "expression": false,
      "start": 144,
      "end": 257
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
