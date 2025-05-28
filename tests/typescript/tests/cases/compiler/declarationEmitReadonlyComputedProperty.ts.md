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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "decorators": [],
              "name": "SYMBOL",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 22,
              "end": 30,
              "callee": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "Interface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "SYMBOL",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "createInstance",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 220,
                      "decorators": [],
                      "name": "SYMBOL",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 223,
                      "end": 225,
                      "value": "",
                      "raw": "''"
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "createInstance",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 23,
            "decorators": [],
            "name": "createInstance",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 59,
              "decorators": [],
              "name": "spread",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "createInstance",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
