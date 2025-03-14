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
  "end": 258,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 79,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 77,
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
                  "key": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 63,
                    "decorators": [],
                    "name": "type",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "\"json\"",
                        "value": "json"
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 48,
              "decorators": [],
              "name": "ImportAttributes",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ImportDeclaration",
      "start": 81,
      "end": 133,
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 120,
            "end": 130,
            "raw": "\"not-json\"",
            "value": "not-json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 101,
        "end": 106,
        "raw": "\"./a\"",
        "value": "./a"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 142,
      "expression": {
        "type": "UnaryExpression",
        "start": 134,
        "end": 141,
        "argument": {
          "type": "Identifier",
          "start": 139,
          "end": 141,
          "decorators": [],
          "name": "ns",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 257,
      "async": true,
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
                "options": {
                  "type": "ObjectExpression",
                  "start": 189,
                  "end": 253,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 199,
                      "end": 246,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 203,
                        "decorators": [],
                        "name": "with",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 205,
                        "end": 246,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 219,
                            "end": 235,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 219,
                              "end": 223,
                              "decorators": [],
                              "name": "type",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 225,
                              "end": 235,
                              "raw": "\"not-json\"",
                              "value": "not-json"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "source": {
                  "type": "Literal",
                  "start": 182,
                  "end": 187,
                  "raw": "\"./a\"",
                  "value": "./a"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
