__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 17,
        "properties": []
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
  "end": 257,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 79,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 48,
              "decorators": [],
              "name": "ImportAttributes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 49,
              "end": 77,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 59,
                  "end": 71,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 63,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 71,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 65,
                      "end": 71,
                      "literal": {
                        "type": "Literal",
                        "start": 65,
                        "end": 71,
                        "value": "json",
                        "raw": "\"json\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ImportDeclaration",
      "start": 81,
      "end": 133,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 88,
          "end": 95,
          "local": {
            "type": "Identifier",
            "start": 93,
            "end": 95,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 101,
        "end": 106,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 114,
          "end": 130,
          "key": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 120,
            "end": 130,
            "value": "not-json",
            "raw": "\"not-json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 142,
      "expression": {
        "type": "UnaryExpression",
        "start": 134,
        "end": 141,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 139,
          "end": 141,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 257,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 255,
            "expression": {
              "type": "AwaitExpression",
              "start": 169,
              "end": 254,
              "argument": {
                "type": "ImportExpression",
                "start": 175,
                "end": 254,
                "source": {
                  "type": "Literal",
                  "start": 182,
                  "end": 187,
                  "value": "./a",
                  "raw": "\"./a\""
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 189,
                  "end": 253,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 199,
                      "end": 246,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 203,
                        "decorators": [],
                        "name": "with",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 205,
                        "end": 246,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 219,
                            "end": 235,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 219,
                              "end": 223,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 225,
                              "end": 235,
                              "value": "not-json",
                              "raw": "\"not-json\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "phase": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
