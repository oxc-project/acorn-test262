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
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "ImportAttributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 114,
          "end": 130,
          "key": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 139,
          "end": 141,
          "name": "ns",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 203,
                        "name": "with",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 219,
                              "end": 223,
                              "name": "type",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 225,
                              "end": 235,
                              "value": "not-json",
                              "raw": "\"not-json\""
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
