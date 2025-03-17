__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 30,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "name": "SYMBOL",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 22,
              "end": 30,
              "callee": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 150,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 39,
        "end": 150,
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 58,
          "name": "Interface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 79,
                "name": "SYMBOL",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                }
              },
              "accessibility": null,
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
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 231,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 159,
        "end": 231,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 182,
          "name": "createInstance",
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
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 220,
                      "name": "SYMBOL",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 223,
                      "end": 225,
                      "value": "",
                      "raw": "''"
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
              "name": "Interface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 88,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 23,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 23,
            "name": "createInstance",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 23,
            "name": "createInstance",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 38,
        "value": "./bug",
        "raw": "'./bug'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 88,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 88,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 59,
              "name": "spread",
              "typeAnnotation": null,
              "decorators": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 83,
                      "name": "createInstance",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
