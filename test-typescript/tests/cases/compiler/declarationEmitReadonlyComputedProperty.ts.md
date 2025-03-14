bug.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 30,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 30,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "decorators": [],
              "name": "SYMBOL",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 22,
              "end": 30,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 150,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 39,
        "end": 150,
        "body": {
          "type": "TSInterfaceBody",
          "start": 59,
          "end": 150,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 63,
              "end": 89,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 79,
                "decorators": [],
                "name": "SYMBOL",
                "optional": false
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 58,
          "decorators": [],
          "name": "Interface",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 231,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 159,
        "end": 231,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 196,
          "end": 231,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 200,
              "end": 229,
              "argument": {
                "type": "ObjectExpression",
                "start": 207,
                "end": 229,
                "properties": [
                  {
                    "type": "Property",
                    "start": 213,
                    "end": 225,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 220,
                      "decorators": [],
                      "name": "SYMBOL",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 223,
                      "end": 225,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 182,
          "decorators": [],
          "name": "createInstance",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 184,
          "end": 195,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 186,
            "end": 195,
            "typeName": {
              "type": "Identifier",
              "start": 186,
              "end": 195,
              "decorators": [],
              "name": "Interface",
              "optional": false
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 38,
        "raw": "'./bug'",
        "value": "./bug"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 23,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 23,
            "decorators": [],
            "name": "createInstance",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 23,
            "decorators": [],
            "name": "createInstance",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 88,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 88,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 88,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 59,
              "decorators": [],
              "name": "spread",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 62,
              "end": 88,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 66,
                  "end": 85,
                  "argument": {
                    "type": "CallExpression",
                    "start": 69,
                    "end": 85,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 83,
                      "decorators": [],
                      "name": "createInstance",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
