__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 150,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 150,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 85,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 85,
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 85,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 44,
                    "end": 56,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 48,
                      "decorators": [],
                      "name": "salt",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 65,
                    "end": 79,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 71,
                      "decorators": [],
                      "name": "pepper",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
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
                "end": 33,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 91,
            "end": 121,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 98,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 121,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 109,
                  "end": 112,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 111,
                      "end": 112,
                      "typeName": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 112,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 127,
            "end": 148,
            "expression": {
              "type": "CallExpression",
              "start": 127,
              "end": 147,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 129,
                  "end": 146,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 130,
                      "end": 136,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 134,
                        "decorators": [],
                        "name": "salt",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 135,
                        "end": 136,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    {
                      "type": "Property",
                      "start": 137,
                      "end": 145,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 143,
                        "decorators": [],
                        "name": "pepper",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 144,
                        "end": 145,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
