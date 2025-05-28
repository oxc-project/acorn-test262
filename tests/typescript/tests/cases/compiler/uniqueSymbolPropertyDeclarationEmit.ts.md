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
            "decorators": [],
            "name": "Op",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "Po",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "decorators": [],
            "name": "Po",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 99,
                      "end": 104,
                      "object": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 101,
                        "decorators": [],
                        "name": "Op",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 104,
                        "decorators": [],
                        "name": "or",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 107,
                      "end": 109,
                      "elements": []
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 115,
                    "end": 126,
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 121,
                      "object": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 118,
                        "decorators": [],
                        "name": "Po",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 121,
                        "decorators": [],
                        "name": "ro",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 124,
                      "end": 126,
                      "properties": []
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "expression": false
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 51,
            "decorators": [],
            "name": "Op",
            "optional": false,
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
                      "decorators": [],
                      "name": "or",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Op",
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
  "end": 59,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 59,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 58,
              "decorators": [],
              "name": "Po",
              "optional": false,
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
                        "decorators": [],
                        "name": "ro",
                        "optional": false,
                        "typeAnnotation": null
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
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
