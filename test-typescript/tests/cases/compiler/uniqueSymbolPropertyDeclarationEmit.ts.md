__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "name": "Op",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "value": "./op",
        "raw": "'./op'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 23,
      "end": 49,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 32,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "name": "Po",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "name": "Po",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 48,
        "value": "./po",
        "raw": "'./po'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 51,
      "end": 133,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 66,
        "end": 133,
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 81,
          "end": 133,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 85,
              "end": 131,
              "argument": {
                "type": "ObjectExpression",
                "start": 92,
                "end": 130,
                "properties": [
                  {
                    "type": "Property",
                    "start": 98,
                    "end": 109,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 99,
                      "end": 104,
                      "object": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 101,
                        "name": "Op",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 104,
                        "name": "or",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 107,
                      "end": 109,
                      "elements": []
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 115,
                    "end": 126,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 121,
                      "object": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 118,
                        "name": "Po",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 121,
                        "name": "ro",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 124,
                      "end": 126,
                      "properties": []
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
  "end": 73,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 51,
            "name": "Op",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 18,
                "end": 51,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 22,
                    "end": 49,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 33,
                      "name": "or",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "start": 35,
                        "end": 48,
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 42,
                          "end": 48
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 54,
      "end": 72,
      "declaration": {
        "type": "Identifier",
        "start": 69,
        "end": 71,
        "name": "Op",
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
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 58,
              "name": "Po",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 25,
                  "end": 58,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 29,
                      "end": 56,
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 40,
                        "name": "ro",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 40,
                        "end": 55,
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "start": 42,
                          "end": 55,
                          "operator": "unique",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 49,
                            "end": 55
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
        "declare": true
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
