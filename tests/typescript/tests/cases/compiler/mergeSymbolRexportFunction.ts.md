__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Row",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Row",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "importKind": "value",
          "start": 8,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": ".",
        "raw": "'.'",
        "start": 18,
        "end": 21
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Row",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 25
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 22,
        "end": 27
      },
      "directive": null,
      "start": 22,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": ".",
        "raw": "'.'",
        "start": 7,
        "end": 10
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 10
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": ".",
        "raw": "'.'",
        "start": 26,
        "end": 29
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Row",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 51,
                          "end": 55
                        },
                        "start": 48,
                        "end": 55
                      },
                      "start": 45,
                      "end": 55
                    },
                    "start": 43,
                    "end": 55
                  },
                  "start": 40,
                  "end": 55
                },
                "init": null,
                "definite": false,
                "start": 40,
                "end": 55
              }
            ],
            "declare": false,
            "start": 34,
            "end": 56
          }
        ],
        "start": 30,
        "end": 58
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 11,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Row",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 16
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Row",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 16
          },
          "exportKind": "value",
          "start": 13,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./common",
        "raw": "'./common'",
        "start": 23,
        "end": 33
      },
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Row",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 27
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 31,
            "end": 35
          },
          "start": 29,
          "end": 35
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
