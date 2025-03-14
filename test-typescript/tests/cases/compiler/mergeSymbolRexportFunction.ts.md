__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 21,
        "raw": "'.'",
        "value": "."
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Row",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Row",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 28,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 27,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "decorators": [],
          "name": "Row",
          "optional": false
        },
        "optional": false
      }
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
      "type": "ImportDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 10,
        "raw": "'.'",
        "value": "."
      },
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 58,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 58,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 34,
            "end": 56,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 40,
                "end": 55,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 55,
                  "decorators": [],
                  "name": "Row",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 45,
                      "end": 55,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 48,
                        "end": 55,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 51,
                          "end": 55
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 26,
        "end": 29,
        "raw": "'.'",
        "value": "."
      }
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
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "raw": "'./common'",
        "value": "./common"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 16,
          "exported": {
            "type": "Identifier",
            "start": 13,
            "end": 16,
            "decorators": [],
            "name": "Row",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 16,
            "decorators": [],
            "name": "Row",
            "optional": false
          }
        }
      ]
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
  "end": 37,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 36,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "Row",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 29,
          "end": 35,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 31,
            "end": 35
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
